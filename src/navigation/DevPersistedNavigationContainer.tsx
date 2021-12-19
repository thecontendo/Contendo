import * as React from 'react';
import {
  InitialState,
  NavigationContainerRef,
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {setAsyncValue, getAsyncValue} from 'app-interface/async-storage';
import {InteractionManager} from 'react-native';

interface DevPersistedNavigationContainerProps
  extends React.ComponentProps<typeof NavigationContainer> {
  persistKey: string;
}

function DevPersistedNavigationContainerImpl(
  {
    children,
    persistKey,
    onStateChange,
    ...others
  }: DevPersistedNavigationContainerProps,
  forwardedRef: React.Ref<NavigationContainerRef<any>>,
) {
  const [isReady, setIsReady] = React.useState(false);
  // const scheme = useColorScheme();
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();

  const persistInteractionRef = React.useRef<{cancel: () => void} | null>(null);

  const onStateChangeInternal = React.useCallback(
    state => {
      const persistState = async () => {
        persistInteractionRef.current = null;
        try {
          if (persistKey) {
            await setAsyncValue(persistKey, JSON.stringify(state));
          }
        } catch (ex) {
          console.warn(`Failed to persist state. ${ex.message}`);
        }
      };

      if (persistInteractionRef.current !== null) {
        persistInteractionRef.current.cancel();
      }

      if (state != null) {
        persistInteractionRef.current =
          InteractionManager.runAfterInteractions(persistState);
      }

      if (onStateChange != null) {
        onStateChange(state);
      }
    },
    [onStateChange, persistKey],
  );

  React.useEffect(() => {
    const loadPersistedState = async () => {
      try {
        const jsonString = await getAsyncValue(persistKey);
        if (jsonString != null) {
          setInitialState(JSON.parse(jsonString));
        }
        setIsReady(true);
      } catch (ex) {
        console.warn(`Failed to load state. ${ex.message}`);
        setIsReady(true);
      }
    };
    loadPersistedState().then();
  }, [persistKey]);

  if (!isReady) {
    return null;
  }

  const MyDefaultTheme = {
    ...DefaultTheme,
  };

  return (
    <NavigationContainer
      theme={MyDefaultTheme}
      {...others}
      key={persistKey}
      ref={forwardedRef}
      initialState={initialState}
      onStateChange={onStateChangeInternal}
      children={children}
    />
  );
}

const DevPersistedNavigationContainer = __DEV__
  ? React.forwardRef(DevPersistedNavigationContainerImpl)
  : NavigationContainer;

export default DevPersistedNavigationContainer;

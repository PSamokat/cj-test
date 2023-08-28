import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export function useSelectorFactory<State, Return>(
    factory: () => (state: State) => Return,
    deps: any[],
) {
    const selector = useMemo(factory, deps);
    const value = useSelector(selector);

    return value;
}

// lib/resource.svelte.ts
export function resource<T>(fn: () => Promise<T>) {
  let current = $state.raw<T | undefined>(undefined);
  let loading = $state.raw(false);
  let error: Error | null = $state.raw(null);

  const run = () => {
    loading = true;
    fn()
      .then((result) => {
        current = result;
        error = null;
      })
      .catch((e) => {
        error = e;
      })
      .finally(() => {
        loading = false;
      });
  };

  $effect(run);

  return {
    get current() { return current; },
    get loading() { return loading; },
    get error() { return error; },
    refresh: run,
  };
}
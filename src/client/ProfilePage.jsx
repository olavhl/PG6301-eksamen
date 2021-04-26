import React from "react";
import { useLoading } from "./lib/useLoading";
import { ErrorView } from "./components/ErrorView";
import { LoadingView } from "./components/LoadingView";

export function ProfilePage({ loadProfile }) {
  const { data, error, loading, reload } = useLoading(
    async () => await loadProfile()
  );

  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView error={error} reload={reload} />;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {data.name}
    </div>
  );
}

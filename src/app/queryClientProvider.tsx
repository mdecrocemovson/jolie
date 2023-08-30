"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function Provider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: { staleTime: 5000, refetchOnWindowFocus: false },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Provider;

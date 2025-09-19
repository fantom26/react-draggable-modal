import { ErrorInfo, FC, ReactNode } from "react";

import { ErrorBoundary } from "react-error-boundary";

import Logger, { LogVariants } from "@/shared/managers/logger.ts";
import { StatusState } from "@/shared/ui";

const logError = (error: unknown) => {
  if (error instanceof Error) {
    Logger.log(error.message, LogVariants.ERROR);
  }
};

const logBoundaryError = (error: Error, errorInfo: ErrorInfo) => {
  logError(error);
  console.log(errorInfo.componentStack);
};

export const CustomErrorBoundary: FC<{
  children: ReactNode;
  title: string;
}> = ({ children, title }) => (
  <ErrorBoundary
    fallback={
      <div className="m-t20">
        <StatusState title={title} />
      </div>
    }
    onError={logBoundaryError}
  >
    {children}
  </ErrorBoundary>
);

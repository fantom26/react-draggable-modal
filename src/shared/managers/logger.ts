export const LogVariants = {
  ERROR: "error",
  INFO: "info",
  WARN: "warn"
} as const;

type LogVariant = (typeof LogVariants)[keyof typeof LogVariants];

class LoggerManager {
  log(
    message: string,
    type: LogVariant = LogVariants.INFO,
    fullStackTrace = false
  ) {
    switch (type) {
      case LogVariants.ERROR:
        console.error(`[ERROR] ${message}`);
        break;
      case LogVariants.INFO:
        console.log(`[INFO] ${message}`);
        break;
      case LogVariants.WARN:
        console.warn(`[WARNING] ${message}`);
        break;
      default:
        console.log(`[LOG] ${message}`);
    }

    if (fullStackTrace) {
      console.log(new Error().stack?.replace("Error", "STACK TRACE:"));
    }
  }
}

const logger = new LoggerManager();

export default logger;

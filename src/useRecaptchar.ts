export interface Recaptcha {
  resetRecaptcha(widgetId: number): void;
  getResponse(widgetId: number): Promise<string>;
  execute(widgetId: number): Promise<void>;
}

export function useRecaptcha(): Recaptcha {
  const resetRecaptcha = (widgetId: number): void => {
    if (typeof widgetId !== "number")
      throw new Error("resetRecaptcha must have 'widgetId'");

    window.grecaptcha.reset(widgetId);
  };

  const getResponse = async (widgetId: number): Promise<string> => {
    if (typeof widgetId !== "number")
      throw new Error("getResponse must have 'widgetId'");

    return await window.grecaptcha.getResponse(widgetId);
  };

  const execute = async (widgetId: number): Promise<void> => {
    if (typeof widgetId !== "number")
      throw new Error("execute must have 'widgetId'");

    return await window.grecaptcha.execute(widgetId);
  };

  return {
    resetRecaptcha,
    getResponse,
    execute,
  };
}

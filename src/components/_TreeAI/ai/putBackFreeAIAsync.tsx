import { EngineSetting, useAI } from "../state/useAI";

export const putBackFreeAIAsync = async ({
    engine,
}: {
    engine: EngineSetting;
}) => {
    engine.status = "free";
    useAI.setState({
        engines: useAI.getState().engines.map((r) => {
            if (r.name === engine.name) {
                return { ...engine };
            }
            return r;
        }),
    });
};

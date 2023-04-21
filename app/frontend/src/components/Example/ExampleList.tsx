import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Can we combine an Azure OpenAI agent and an Azure Redis vectorstore?",
        value: "Can we combine an Azure OpenAI agent and an Azure Redis vectorstore?"
    },
    { text: "Create a code example of a LLMChain with Azure OpenAI", value: "Create a code example of a LLMChain with Azure OpenAI" },
    { text: "How can I store cache in Azure Redis with Langchain?", value: "How can I store cache in Azure Redis with Langchain?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

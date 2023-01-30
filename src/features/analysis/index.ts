import nlp from 'compromise';
import plg from 'compromise-speech';
import { Term } from 'compromise/types/misc';

nlp.plugin(plg);

type SentenceAnalysis = {
    text: string;
    terms: Array<Term> & {
        syllables: Array<string>;
    };
};

const analyze = (text: string) => {
    const paragraphs = text.split(/[\r\n]+/);
    return paragraphs.map(paragraph => {
        return nlp(paragraph).compute('syllables').json() as SentenceAnalysis;
    });
};

export default analyze;

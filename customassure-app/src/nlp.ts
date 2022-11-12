//yarn dev to start 
console.log("Hello world"); 

// @ts-ignore
import aposToLexForm from "apos-to-lex-form";
import {WordTokenizer, SentimentAnalyzer, PorterStemmer} from 'natural'
// @ts-ignore
import SpellCorrector from "spelling-corrector";
import * as stopword from 'stopword'


const tokenizer = new WordTokenizer();
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary(); 

const analyzer = new SentimentAnalyzer('English', PorterStemmer, "afinn"); 

//returns -1, 0, 1
export function getSentiment(str: string) {
    //empty string is neutral
    if(!str.trim()) {
        return 0
    }

    //convert to standard lexicon 
    const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "");
    
    //tokenize word (to array of words)
    const tokenized = tokenizer.tokenize(lexed);

    const fixedSpelling = tokenized.map((word) => spellCorrector.correct(word)); 

    //remove stop words 
    const stopWordsRemoved = stopword.removeStopwords(fixedSpelling); 

    console.log(stopWordsRemoved); 

    const analyzed = analyzer.getSentiment(stopWordsRemoved); 

    return analyzed; 
}

/*console.log(getSentiment('This is awesome!')); 
console.log(getSentiment('lets do some logging')); 
console.log(getSentiment('I got burned in a fire'));*/


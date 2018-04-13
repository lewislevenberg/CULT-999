# Python workbook for nltk processing of Recoll index.

from __future__ import division
import nltk, re, pprint, numpy, six, matplotlib, string
from bs4 import BeautifulSoup
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.collocations import *
from string import punctuation

# get the data going
nltk.download('stopwords')
stop = stopwords.words('english') + list(string.punctuation)
index_report = open('indexed_texts_report.html')
raw = index_report.read()

report_cleaned = BeautifulSoup(raw).get_text()
tokens = word_tokenize(report_cleaned)
cleanup = [token.lower() for token in tokens if token.lower() not in stop and len(token)>2]

# term frequency distributions without and then with a stoplist
text1 = nltk.Text(tokens)
fdist1 = nltk.FreqDist(text1)
fdist1.plot()

text_clean = nltk.Text(cleanup)
fdist2 = nltk.FreqDist(text_clean)
fdist2.plot()

# let's count some collocations
bigram_measures = nltk.collocations.BigramAssocMeasures()
finder = BigramCollocationFinder.from_words(text_clean)
scored = finder.score_ngrams(bigram_measures.raw_freq)
sorted(bigram for bigram, score in scored)

finder = BigramCollocationFinder.from_words(text_clean)
finder.nbest(bigram_measures.likelihood_ratio, 1000)
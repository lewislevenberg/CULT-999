# Python workbook for nltk processing of Recoll index.

# get the python libraries that we need
from __future__ import division
import nltk, re, pprint, numpy, six, matplotlib, string
from bs4 import BeautifulSoup
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.collocations import *
from string import punctuation

# get a stoplist
nltk.download('stopwords')
stop = stopwords.words('english') + list(string.punctuation)

# clean up the index document's HTML / RDF format
index_report = open('indexed_texts_report.html')
raw = index_report.read()
report_cleaned = BeautifulSoup(raw).get_text()
# break this down into individual words / terms
tokens = word_tokenize(report_cleaned)

text1 = nltk.Text(tokens)

# term frequency distribution of the raw list of words
fdist1 = nltk.FreqDist(text1)
fdist1.plot()

# remove very short words (less than 5 chars) and words not in the stoplist
cleanup = [token.lower() for token in tokens if token.lower() not in stop and len(token)>5]
text_clean = nltk.Text(cleanup)

# term frequency distribution of the cleaned up terms
fdist2 = nltk.FreqDist(text_clean)
fdist2.plot()

# let's count the 2-term collocations (bigrams), raw and then filtered
bigram_measures = nltk.collocations.BigramAssocMeasures()

finder = BigramCollocationFinder.from_words(text_clean)

# sort out the most frequent raw bigrams from the cleaned text
scored = finder.score_ngrams(bigram_measures.raw_freq)
all_bigrams = sorted(bigram for bigram, score in scored)
# print these to a file
output_all_bigrams = open('all_bigrams.txt', 'w')
print >>output_all_bigrams, all_bigrams 
output_all_bigrams.close()

# get the cleaned up terms' bigrams, even across intervening words
finder = BigramCollocationFinder.from_words(text_clean, window_size = 20)
# filter out bigrams appearing less than twice across the index
finder.apply_freq_filter(2)
# now select for the top 30 'most likely' bigrams
filtered_bigrams = finder.nbest(bigram_measures.likelihood_ratio, 30)
# print these to a file
output_filtered_bigrams = open('filtered_bigrams.txt', 'w')
print >>output_filtered_bigrams, filtered_bigrams 
output_filtered_bigrams.close()

# draw up key terms from bigrams vs their location in corpus
text_clean.dispersion_plot(["internet", "infrastructure", "backbone", "network", "policy", "information", "telecommunications", "country", "state", "ghana", "nigeria", "liberia", "national", "regulations", "public", "private", "sector", "quality", "services", "government", "economic", "political", "social", "commission", "population", "african", "market", "computer", "law"])
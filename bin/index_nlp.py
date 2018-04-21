# Python workbook for nltk processing of Recoll index.

# get the python libraries that we need
from __future__ import division
import nltk, re, pprint, numpy, six, matplotlib, string, collections
from bs4 import BeautifulSoup
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.collocations import *
from string import punctuation
from collections import Counter

# Check NLTK version installed
# print nltk.__version__

# get a stoplist (uncomment next line if not up to date)
# nltk.download('stopwords')
# use the NLTK stop list, and add to that regular punctuation marks and some specific metadata terms
stop = stopwords.words('english') + list(string.punctuation) + ['4/5/2018','4/7/2017', '2/28/2018', '2017-04-07', '2012-12-13', '12/13/2012', '4:06:29', 'snapshot', 'modified', 'accessed', 'attachments']

# clean up the index document's HTML / RDF format
index_report = open('indexed_texts_report.html')
raw = index_report.read()
report_cleaned = BeautifulSoup(raw, "lxml").get_text()
# break this down into individual words / terms
tokens = word_tokenize(report_cleaned)

# remove very short words (less than 5 chars) and words not in the stoplist
cleanup = [token.lower() for token in tokens if token.lower() not in stop and len(token)>5]
# Create an NLTK text object
text_clean = nltk.Text(cleanup)

# NLTK text object and frequency distribution on the whole list of words
# text1 = nltk.Text(tokens)
# term frequency distribution of the raw list of words
# fdist1 = nltk.FreqDist(text1)
# graph this frequency distribution - illegible, too many terms
# fdist1.plot()

# term frequency distribution of the cleaned up terms
fdist2 = nltk.FreqDist(text_clean)
# graph these top 50 terms
fdist2.plot(50)
# identify where key terms appear in the index (which files to review)
vocabulary = [i[0] for i in fdist2.most_common(50)]
text_clean.dispersion_plot(vocabulary)


# get the terms that only occur once
tf_hapaxes = fdist2.hapaxes()
# print these to a file
output_hapaxes = open('hapaxes.txt', 'w')
print >>output_hapaxes, tf_hapaxes
output_hapaxes.close()

# count the 2-term collocations (bigrams)
bigram_measures = nltk.collocations.BigramAssocMeasures()
finder = BigramCollocationFinder.from_words(text_clean)
# sort out the most frequent raw bigrams from the cleaned text
# scored = finder.score_ngrams(bigram_measures.raw_freq)
# all_bigrams = sorted(bigram for bigram, score in scored)
# print these to a file
# output_all_bigrams = open('all_bigrams.txt', 'w')
# print >>output_all_bigrams, all_bigrams 
# output_all_bigrams.close()
# get the list of bigrams from clean texts, even if 18 other terms come in between
finder = BigramCollocationFinder.from_words(text_clean, window_size = 20)
finder.ngram_fd.viewitems()
# filter out bigrams appearing less than twice across the index
finder.apply_freq_filter(2)
# now select for the top 500 'interesting' bigrams
filtered_bigrams = finder.nbest(bigram_measures.likelihood_ratio, 500)
# print these to a file
output_filtered_bigrams = open('filtered_bigrams.txt', 'w')
print >>output_filtered_bigrams, filtered_bigrams 
output_filtered_bigrams.close()


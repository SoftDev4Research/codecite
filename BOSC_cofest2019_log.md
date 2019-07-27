1.  [Zotero connector browser plugin:]{.c9}

<!-- -->

1.  [Fetch reference from github repository]{.c9}

<!-- -->

1.  [From bibtex file]{.c9}
2.  [From .cff file]{.c9}
3.  [From zenodo/doi badge on github]{.c9}

<!-- -->

2.  [Explore crossref and eventdata]{.c9}

<!-- -->

1.  Crossref DOI -\> metadata:
    [[https://search.crossref.org/](https://www.google.com/url?q=https://search.crossref.org/&sa=D&ust=1564233887434000){.c14}]{.c22}
2.  Datacite DOI -\> metadata:
    [[https://search.datacite.org/](https://www.google.com/url?q=https://search.datacite.org/&sa=D&ust=1564233887434000){.c14}]{.c22}

<!-- -->

1.  [How is this different from altmetrics?]{.c9}

<!-- -->

1.  [Open source, not mystery algorithm]{.c9}

<!-- -->

3.  [Other ways people publish software (can we fetch reference
    information from them)]{.c9}

<!-- -->

1.  [Journal of Open Source Software]{.c9}
2.  [Journal of Open Research Software]{.c9}
3.  [SoftwareX]{.c9}
4.  [GigaScience]{.c9}

<!-- -->

4.  [Generate CITATION.cff based on GH info ]{.c9}

<!-- -->

1.  [what can we get from API]{.c9}

[]{.c9}

[]{.c9}

[]{.c9}

Notes:

Datacite v4.2 scheme:
[[https://schema.datacite.org/meta/kernel-4.2/doc/DataCite-MetadataKernel\_v4.2.pdf](https://www.google.com/url?q=https://schema.datacite.org/meta/kernel-4.2/doc/DataCite-MetadataKernel_v4.2.pdf&sa=D&ust=1564233887435000){.c14}]{.c22}

[]{.c9}

[]{.c9}

[[https://blog.datacite.org/doi-registrations-software/](https://www.google.com/url?q=https://blog.datacite.org/doi-registrations-software/&sa=D&ust=1564233887435000){.c14}]{.c22}

["As of May 16, 2018, 58,301 DOIs have been registered for software. We
can break down this number by repository where the software source code
is hosted -- most DOIs for software have been registered at
Zenodo."]{.c9}

[CERN.ZENODO - ZENODO - Research. Shared.        41346]{.c9}

[FIGSHARE.ARS - figshare Academic Research System        4226]{.c9}

[PURDUE.NCIB - National Cancer Institute, Bioconductor        2769]{.c9}

[PURDUE.EZID - Purdue University        2463]{.c9}

[OSTI.DOE - DOE Generic        736]{.c9}

[INIST.INRA - Institut National de Recherche
Agronomique        223]{.c9}

[OCEAN.OCEAN - Code Ocean        206]{.c9}

[CRUI.INFNCNAF - Istituto Nazionale di Fisica Nucleare. Centro Nazionale
Analisi Fotogrammi        190]{.c9}

[CDL.UCI - UC Irvine Library        120]{.c9}

[ETHZ.DA-RD - ETHZ Data Archive - Research Data]{.c9}

[]{.c9}

[]{.c9}

[]{.c9}

-   []{.c9}
-   []{.c9}

FORCE11 Software Citation Implementation Working Group (SCIWG):
[[https://github.com/force11/force11-sciwg](https://www.google.com/url?q=https://github.com/force11/force11-sciwg&sa=D&ust=1564233887436000){.c14}]{.c22}

[]{.c9}

-   Challenges Preprint:
    [[https://arxiv.org/abs/1905.08674v1](https://www.google.com/url?q=https://arxiv.org/abs/1905.08674v1&sa=D&ust=1564233887436000){.c14}]{.c22} (or
    Github
    [[https://github.com/force11/force11-sciwg/tree/master/Challenges](https://www.google.com/url?q=https://github.com/force11/force11-sciwg/tree/master/Challenges&sa=D&ust=1564233887436000){.c14}]{.c22}[)]{.c9}

[]{.c9}

RDA software source code identification WG:
[[https://www.rd-alliance.org/groups/software-source-code-identification](https://www.google.com/url?q=https://www.rd-alliance.org/groups/software-source-code-identification&sa=D&ust=1564233887436000){.c14}]{.c22}

[]{.c9}

[Browser plugin:]{.c9}

[[https://github.com/zotero/zotero-connectors](https://www.google.com/url?q=https://github.com/zotero/zotero-connectors&sa=D&ust=1564233887437000){.c14}]{.c22}

[]{.c9}

[]{.c9}

[Github API]{.c18} {#h.ne3yrql4w6b3 .c30 .c4}
==================

[[REST API
endpoints](https://www.google.com/url?q=https://developer.github.com/v3/apps/available-endpoints/&sa=D&ust=1564233887437000){.c14}]{.c22}

[]{.c9}

[users/]{.c9}

-   [name]{.c9}
-   [company]{.c9}
-   [location]{.c9}

[]{.c9}

[repos/]{.c9}

-   [name]{.c9}
-   [full\_name : \[org\]/\[reponame\]]{.c9}
-   [Created\_at]{.c9}

[]{.c9}

[]{.c9}

[Github - CFF mapping]{.c18} {#h.9axw2xbyfbbj .c4 .c30}
============================

[]{.c9}

[]{#t.d173c409755a26e49fbbddbf2addb31d44bc8da0}[]{#t.0}

+-------------+-------------+-------------+-------------+-------------+
| [CFF        | [CFF Data   | [Descriptio | [Github]{.c | [Github     |
| Key]{.c7}   | Type]{.c7}  | n]{.c7}     | 7}          | query]{.c7} |
+-------------+-------------+-------------+-------------+-------------+
| [abbreviati | [String]{.c | [The        | [-]{.c7}    | [-]{.c7}    |
| on]{.c7}    | 7}          | abbreviatio |             |             |
|             |             | n           |             |             |
|             |             | of the      |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [abstract]{ | [String]{.c | [The        | [Repo       | [[https://a |
| .c7}        | 7}          | abstract of | description | pi.github.c |
|             |             | a           | ]{.c7}      | om/repos/or |
|             |             | work]{.c7}  |             | g/repo](htt |
|             |             |             |             | ps://www.go |
|             |             |             |             | ogle.com/ur |
|             |             |             |             | l?q=https:/ |
|             |             |             |             | /api.github |
|             |             |             |             | .com/repos/ |
|             |             |             |             | org/repo&sa |
|             |             |             |             | =D&ust=1564 |
|             |             |             |             | 23388744000 |
|             |             |             |             | 0){.c14}]{. |
|             |             |             |             | c22         |
|             |             |             |             | .c36}[ fiel |
|             |             |             |             | d           |
|             |             |             |             | is          |
|             |             |             |             | 'descriptio |
|             |             |             |             | n"]{.c7}    |
+-------------+-------------+-------------+-------------+-------------+
| [authors]{. | [Collection | [The author | [Contributo | [[https://a |
| c7}         | of entity   | of a        | r           | pi.github.c |
|             | or          | work]{.c7}  | names?]{.c7 | om/repos/or |
|             | ]{.c36}[[pe |             | }           | g/repo](htt |
|             | rson        |             |             | ps://www.go |
|             | objects](#i |             |             | ogle.com/ur |
|             | d.f6zppkp2l |             |             | l?q=https:/ |
|             | 56p){.c14}] |             |             | /api.github |
|             | {.c22       |             |             | .com/repos/ |
|             | .c36}       |             |             | org/repo&sa |
|             |             |             |             | =D&ust=1564 |
|             |             |             |             | 23388744100 |
|             |             |             |             | 0){.c14}]{. |
|             |             |             |             | c22         |
|             |             |             |             | .c36}[ ]{.c |
|             |             |             |             | 7}          |
|             |             |             |             |             |
|             |             |             |             | ['contribut |
|             |             |             |             | ors\_url']{ |
|             |             |             |             | .c7}        |
+-------------+-------------+-------------+-------------+-------------+
| [collection | [String]{.c | [The DOI of | []{.c7}     | []{.c7}     |
| -doi]{.c7}  | 7}          | a           |             |             |
|             |             | collection  |             |             |
|             |             | containing  |             |             |
|             |             | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [collection | [String]{.c | [The title  | []{.c7}     | []{.c7}     |
| -title]{.c7 | 7}          | of a        |             |             |
| }           |             | collection  |             |             |
|             |             | or          |             |             |
|             |             | proceedings |             |             |
|             |             | ]{.c7}      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [collection | [String]{.c | [The type   | []{.c7}     | []{.c7}     |
| -type]{.c7} | 7}          | of a        |             |             |
|             |             | collection] |             |             |
|             |             | {.c7}       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [commit]{.c | [String]{.c | [The (e.g., | [Git commit | []{.c7}     |
| 7}          | 7}          | Git) commit | hash]{.c7}  |             |
|             |             | hash or     |             |             |
|             |             | (e.g.,      |             |             |
|             |             | Subversion) |             |             |
|             |             | revision    |             |             |
|             |             | number of   |             |             |
|             |             | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [conference | [Entity     | [The        | []{.c7}     | []{.c7}     |
| ]{.c7}      | object]{.c7 | conference  |             |             |
|             | }           | where the   |             |             |
|             |             | work was    |             |             |
|             |             | presented]{ |             |             |
|             |             | .c7}        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [contact]{. | [Collection | [The        | []{.c7}     | []{.c7}     |
| c7}         | of entity   | contact     |             |             |
|             | or person   | person,     |             |             |
|             | objects]{.c | group,      |             |             |
|             | 7}          | company,    |             |             |
|             |             | etc. for a  |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [copyright] | [String]{.c | [The        | []{.c7}     | []{.c7}     |
| {.c7}       | 7}          | copyright   |             |             |
|             |             | information |             |             |
|             |             | pertaining  |             |             |
|             |             | to the      |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [data-type] | [String]{.c | [The data   | []{.c7}     | []{.c7}     |
| {.c7}       | 7}          | type of a   |             |             |
|             |             | data        |             |             |
|             |             | set]{.c7}   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [database]{ | [String]{.c | [The name   | []{.c7}     | []{.c7}     |
| .c7}        | 7}          | of the      |             |             |
|             |             | database    |             |             |
|             |             | where a     |             |             |
|             |             | work was    |             |             |
|             |             | accessed/is |             |             |
|             |             | stored]{.c7 |             |             |
|             |             | }           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [database-p | [Entity     | [The        | []{.c7}     | []{.c7}     |
| rovider]{.c | object]{.c7 | provider of |             |             |
| 7}          | }           | the         |             |             |
|             |             | database    |             |             |
|             |             | where a     |             |             |
|             |             | work was    |             |             |
|             |             | accessed/is |             |             |
|             |             | stored]{.c7 |             |             |
|             |             | }           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [date-acces | [Date]{.c7} | [The date   | []{.c7}     | []{.c7}     |
| sed]{.c7}   |             | the work    |             |             |
|             |             | has been    |             |             |
|             |             | last        |             |             |
|             |             | accessed]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [date-downl | [Date]{.c7} | [The date   | []{.c7}     | []{.c7}     |
| oaded]{.c7} |             | the work    |             |             |
|             |             | has been    |             |             |
|             |             | downloaded] |             |             |
|             |             | {.c7}       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [date-publi | [Date]{.c7} | [The date   | []{.c7}     | []{.c7}     |
| shed]{.c7}  |             | the work    |             |             |
|             |             | has been    |             |             |
|             |             | published]{ |             |             |
|             |             | .c7}        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [date-relea | [Date]{.c7} | [The date   | []{.c7}     | []{.c7}     |
| sed]{.c7}   |             | the work    |             |             |
|             |             | has been    |             |             |
|             |             | released]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [department | [String]{.c | [The        | []{.c7}     | []{.c7}     |
| ]{.c7}      | 7}          | department  |             |             |
|             |             | where a     |             |             |
|             |             | work has    |             |             |
|             |             | been        |             |             |
|             |             | produced]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [doi]{.c7}  | [String]{.c | [The DOI of | []{.c7}     | []{.c7}     |
|             | 7}          | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [edition]{. | [String]{.c | [The        | []{.c7}     | []{.c7}     |
| c7}         | 7}          | edition of  |             |             |
|             |             | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [editors]{. | [Collection | [The        | []{.c7}     | []{.c7}     |
| c7}         | of entity   | editors of  |             |             |
|             | or person   | a           |             |             |
|             | objects]{.c | work]{.c7}  |             |             |
|             | 7}          |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [editors-se | [Collection | [The        | []{.c7}     | []{.c7}     |
| ries]{.c7}  | of entity   | editors of  |             |             |
|             | or person   | a series in |             |             |
|             | objects]{.c | which a     |             |             |
|             | 7}          | work has    |             |             |
|             |             | been        |             |             |
|             |             | published]{ |             |             |
|             |             | .c7}        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [end]{.c7}  | [Integer]{. | [The end    | []{.c7}     | []{.c7}     |
|             | c7}         | page of the |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [entry]{.c7 | [String]{.c | [An entry   | []{.c7}     | []{.c7}     |
| }           | 7}          | in the      |             |             |
|             |             | collection  |             |             |
|             |             | that        |             |             |
|             |             | constitutes |             |             |
|             |             | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [filename]{ | [String]{.c | [The name   | []{.c7}     | []{.c7}     |
| .c7}        | 7}          | of the      |             |             |
|             |             | electronic  |             |             |
|             |             | file        |             |             |
|             |             | containing  |             |             |
|             |             | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [format]{.c | [String]{.c | [The format | []{.c7}     | []{.c7}     |
| 7}          | 7}          | in which a  |             |             |
|             |             | work is     |             |             |
|             |             | represented |             |             |
|             |             | ]{.c7}      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [institutio | [Entity     | [The        | []{.c7}     | []{.c7}     |
| n]{.c7}     | object]{.c7 | institution |             |             |
|             | }           | where a     |             |             |
|             |             | work has    |             |             |
|             |             | been        |             |             |
|             |             | produced or |             |             |
|             |             | published]{ |             |             |
|             |             | .c7}        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [isbn]{.c7} | [String]{.c | [The ISBN   | []{.c7}     | []{.c7}     |
|             | 7}          | of the      |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [issn]{.c7} | [String]{.c | [The ISSN   | []{.c7}     | []{.c7}     |
|             | 7}          | of the      |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [issue]{.c7 | [Integer]{. | [The issue  | []{.c7}     | []{.c7}     |
| }           | c7}         | of a        |             |             |
|             |             | periodical  |             |             |
|             |             | in which a  |             |             |
|             |             | work        |             |             |
|             |             | appeared]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [issue-date | [String]{.c | [The        | []{.c7}     | []{.c7}     |
| ]{.c7}      | 7}          | publication |             |             |
|             |             | date of the |             |             |
|             |             | issue of a  |             |             |
|             |             | periodical  |             |             |
|             |             | in which a  |             |             |
|             |             | work        |             |             |
|             |             | appeared -  |             |             |
|             |             | see note    |             |             |
|             |             | below]{.c7} |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [issue-titl | [String]{.c | [The name   | []{.c7}     | []{.c7}     |
| e]{.c7}     | 7}          | of the      |             |             |
|             |             | issue of a  |             |             |
|             |             | periodical  |             |             |
|             |             | in which    |             |             |
|             |             | the work    |             |             |
|             |             | appeared]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [journal]{. | [String]{.c | [The name   | []{.c7}     | []{.c7}     |
| c7}         | 7}          | of the      |             |             |
|             |             | journal/mag |             |             |
|             |             | azine/newsp |             |             |
|             |             | aper/period |             |             |
|             |             | ical        |             |             |
|             |             | where the   |             |             |
|             |             | work was    |             |             |
|             |             | published]{ |             |             |
|             |             | .c7}        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [keywords]{ | [Collection | [Keywords   | []{.c7}     | []{.c7}     |
| .c7}        | of          | pertaining  |             |             |
|             | strings]{.c | to the      |             |             |
|             | 7}          | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [languages] | [Collection | [The        | []{.c7}     | []{.c7}     |
| {.c7}       | of ISO 639  | language of |             |             |
|             | language    | the         |             |             |
|             | strings]{.c | work]{.c7}  |             |             |
|             | 7}          |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [license]{. | [License    | [The        | [License]{. | []{.c7}     |
| c7}         | string]{.c7 | license     | c7}         |             |
|             | }           | under which |             |             |
|             |             | a work is   |             |             |
|             |             | licensed]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [license-ur | [String     | [The URL of | [License-UR | []{.c7}     |
| l]{.c7}     | (URL)]{.c7} | the license | L?]{.c7}    |             |
|             |             | text under  |             |             |
|             |             | which a     |             |             |
|             |             | work is     |             |             |
|             |             | licensed]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [location]{ | [Entity     | [The        | []{.c7}     | []{.c7}     |
| .c7}        | object]{.c7 | location of |             |             |
|             | }           | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [loc-start] | [Integer]{. | [The line   | []{.c7}     | []{.c7}     |
| {.c7}       | c7}         | of code in  |             |             |
|             |             | the file    |             |             |
|             |             | where the   |             |             |
|             |             | work        |             |             |
|             |             | starts]{.c7 |             |             |
|             |             | }           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [loc-end]{. | [Integer]{. | [The line   | []{.c7}     | []{.c7}     |
| c7}         | c7}         | of code in  |             |             |
|             |             | the file    |             |             |
|             |             | where the   |             |             |
|             |             | work        |             |             |
|             |             | ends]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [medium]{.c | [String]{.c | [The medium | []{.c7}     | []{.c7}     |
| 7}          | 7}          | of the      |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [month]{.c7 | [Integer]{. | [The month  | []{.c7}     | []{.c7}     |
| }           | c7}         | in which a  |             |             |
|             |             | work has    |             |             |
|             |             | been        |             |             |
|             |             | published]{ |             |             |
|             |             | .c7}        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [nihmsid]{. | [String]{.c | [The        | []{.c7}     | []{.c7}     |
| c7}         | 7}          | NIHMSID of  |             |             |
|             |             | a           |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [notes]{.c7 | [String]{.c | [Notes      | []{.c7}     | []{.c7}     |
| }           | 7}          | pertaining  |             |             |
|             |             | to the      |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [number]{.c | [String]{.c | [The        | []{.c7}     | []{.c7}     |
| 7}          | 7}          | accession   |             |             |
|             |             | number for  |             |             |
|             |             | a           |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [number-vol | [Integer]{. | [The number | []{.c7}     | []{.c7}     |
| umes]{.c7}  | c7}         | of volumes  |             |             |
|             |             | making up   |             |             |
|             |             | the         |             |             |
|             |             | collection  |             |             |
|             |             | in which    |             |             |
|             |             | the work    |             |             |
|             |             | has been    |             |             |
|             |             | published]{ |             |             |
|             |             | .c7}        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [pages]{.c7 | [Integer]{. | [The number | []{.c7}     | []{.c7}     |
| }           | c7}         | of pages of |             |             |
|             |             | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [patent-sta | [Collection | [The states | []{.c7}     | []{.c7}     |
| tes]{.c7}   | of          | for which a |             |             |
|             | strings]{.c | patent is   |             |             |
|             | 7}          | granted]{.c |             |             |
|             |             | 7}          |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [pmcid]{.c7 | [String]{.c | [The PMCID  | []{.c7}     | []{.c7}     |
| }           | 7}          | of a        |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [publisher] | [Entity     | [The        | []{.c7}     | []{.c7}     |
| {.c7}       | object]{.c7 | publisher   |             |             |
|             | }           | who has     |             |             |
|             |             | published   |             |             |
|             |             | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [recipients | [Collection | [The        | []{.c7}     | []{.c7}     |
| ]{.c7}      | of entity   | recipient   |             |             |
|             | or person   | of a        |             |             |
|             | objects]{.c | personal    |             |             |
|             | 7}          | communicati |             |             |
|             |             | on]{.c7}    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [repository | [String     | [The        | [Repo       | []{.c7}     |
| ]{.c7}      | (URL)]{.c7} | repository  | URL]{.c7}   |             |
|             |             | where the   |             |             |
|             |             | work is     |             |             |
|             |             | stored]{.c7 |             |             |
|             |             | }           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [repository | [String     | [The        | [Github?]{. | []{.c7}     |
| -code]{.c7} | (URL)]{.c7} | version     | c7}         |             |
|             |             | control     |             |             |
|             |             | system      |             |             |
|             |             | where the   |             |             |
|             |             | source code |             |             |
|             |             | of the work |             |             |
|             |             | is          |             |             |
|             |             | stored]{.c7 |             |             |
|             |             | }           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [repository | [String     | [The        | []{.c7}     | []{.c7}     |
| -artifact]{ | (URL)]{.c7} | repository  |             |             |
| .c7}        |             | where the   |             |             |
|             |             | (executable |             |             |
|             |             | /binary)    |             |             |
|             |             | artifact of |             |             |
|             |             | the work is |             |             |
|             |             | stored]{.c7 |             |             |
|             |             | }           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [scope]{.c7 | [String]{.c | [The scope  | []{.c7}     | []{.c7}     |
| }           | 7}          | of the      |             |             |
|             |             | reference,  |             |             |
|             |             | e.g., the   |             |             |
|             |             | section of  |             |             |
|             |             | the work it |             |             |
|             |             | adheres     |             |             |
|             |             | to]{.c7}    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [section]{. | [String]{.c | [The        | []{.c7}     | []{.c7}     |
| c7}         | 7}          | section of  |             |             |
|             |             | a work that |             |             |
|             |             | is          |             |             |
|             |             | referenced] |             |             |
|             |             | {.c7}       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [senders]{. | [Collection | [The sender | []{.c7}     | []{.c7}     |
| c7}         | of entity   | of a        |             |             |
|             | or person   | personal    |             |             |
|             | objects]{.c | communicati |             |             |
|             | 7}          | on]{.c7}    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [status]{.c | [Status     | [The        | []{.c7}     | []{.c7}     |
| 7}          | string]{.c7 | publication |             |             |
|             | }           | status of   |             |             |
|             |             | the         |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [start]{.c7 | [Integer]{. | [The start  | []{.c7}     | []{.c7}     |
| }           | c7}         | page of the |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [term]{.c7} | [String]{.c | [The term   | []{.c7}     | []{.c7}     |
|             | 7}          | being       |             |             |
|             |             | referenced  |             |             |
|             |             | if the work |             |             |
|             |             | is a        |             |             |
|             |             | dictionary  |             |             |
|             |             | or          |             |             |
|             |             | encyclopedi |             |             |
|             |             | a]{.c7}     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [thesis-typ | [String]{.c | [The type   | []{.c7}     | []{.c7}     |
| e]{.c7}     | 7}          | of the      |             |             |
|             |             | thesis that |             |             |
|             |             | is the      |             |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [title]{.c7 | [String]{.c | [The title  | [Repo       | []{.c7}     |
| }           | 7}          | of the      | name]{.c7}  |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [translator | [Collection | [The        | []{.c7}     | []{.c7}     |
| s]{.c7}     | of entity   | translator  |             |             |
|             | or person   | of a        |             |             |
|             | objects]{.c | work]{.c7}  |             |             |
|             | 7}          |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [type]{.c7} | [Reference  | [The type   | []{.c7}     | []{.c7}     |
|             | types       | of the      |             |             |
|             | string]{.c7 | work]{.c7}  |             |             |
|             | }           |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [url]{.c7}  | [String     | [The URL of | [Repo       | []{.c7}     |
|             | (URL)]{.c7} | the         | URL]{.c7}   |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [version]{. | [String]{.c | [The        | [release/ve | []{.c7}     |
| c7}         | 7}          | version of  | rsion?]{.c7 |             |
|             |             | the         | }           |             |
|             |             | work]{.c7}  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [volume]{.c | [Integer]{. | [The volume | []{.c7}     | []{.c7}     |
| 7}          | c7}         | of the      |             |             |
|             |             | periodical  |             |             |
|             |             | in which a  |             |             |
|             |             | work        |             |             |
|             |             | appeared]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [volume-tit | [String]{.c | [The title  | []{.c7}     | []{.c7}     |
| le]{.c7}    | 7}          | of the      |             |             |
|             |             | volume in   |             |             |
|             |             | which the   |             |             |
|             |             | work        |             |             |
|             |             | appeared]{. |             |             |
|             |             | c7}         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [year]{.c7} | [Integer]{. | [The year   | [created\_a | []{.c7}     |
|             | c7}         | in which a  | t           |             |
|             |             | work has    | -\> extract |             |
|             |             | been        | year?]{.c7} |             |
|             |             | published]{ |             |             |
|             |             | .c7}        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| [year-origi | [Integer]{. | [The year   | [created\_a | []{.c7}     |
| nal]{.c7}   | c7}         | of the      | t           |             |
|             |             | original    | -\> extract |             |
|             |             | publication | year?]{.c7} |             |
|             |             | ]{.c7}      |             |             |
+-------------+-------------+-------------+-------------+-------------+

[]{.c9}

[]{.c9}

[]{#id.f6zppkp2l56p}

[Person object]{.c9}

[]{.c9}

[]{#t.e692297da267d20057f03e8f5788a52e32332300}[]{#t.1}

+-----------------+-----------------+-----------------+-----------------+
| [CFF            | [CFF            | [Github]{.c17}  | [Github         |
| keys]{.c17}     | property]{.c17} |                 | query]{.c17}    |
+-----------------+-----------------+-----------------+-----------------+
| [family-names]{ | [String]{.c25}  | []{.c17}        | []{.c17}        |
| .c25}           |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| [given-names]{. | [String]{.c25}  | []{.c17}        | []{.c17}        |
| c25}            |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| [name-particle] | [String]{.c25}  | []{.c17}        | []{.c17}        |
| {.c25}          |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| [name-suffix]{. | [String]{.c25}  | []{.c17}        | []{.c17}        |
| c25}            |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| [affiliation]{. | [String]{.c25}  | [User           | [https://api.gi |
| c25}            |                 | company]{.c17}  | thub.com/users/ |
|                 |                 |                 | yochannah]{.c17 |
|                 |                 |                 | }               |
|                 |                 |                 |                 |
|                 |                 |                 | [Field is       |
|                 |                 |                 | "company"]{.c17 |
|                 |                 |                 | }               |
+-----------------+-----------------+-----------------+-----------------+
| [address]{.c25} | [String]{.c25}  | []{.c17}        | []{.c17}        |
+-----------------+-----------------+-----------------+-----------------+
| [city]{.c25}    | [String]{.c25}  | [User           | [[https://api.g |
|                 |                 | location]{.c17} | ithub.com/users |
|                 |                 |                 | /yochannah](htt |
|                 |                 |                 | ps://www.google |
|                 |                 |                 | .com/url?q=http |
|                 |                 |                 | s://api.github. |
|                 |                 |                 | com/users/yocha |
|                 |                 |                 | nnah&sa=D&ust=1 |
|                 |                 |                 | 564233887500000 |
|                 |                 |                 | ){.c14}]{.c22   |
|                 |                 |                 | .c36}           |
|                 |                 |                 |                 |
|                 |                 |                 | [Field is       |
|                 |                 |                 | "location"]{.c1 |
|                 |                 |                 | 7}              |
+-----------------+-----------------+-----------------+-----------------+
| [region]{.c25}  | [String]{.c25}  | []{.c17}        | []{.c17}        |
+-----------------+-----------------+-----------------+-----------------+
| [post-code]{.c2 | [String]{.c25}  | []{.c17}        | []{.c17}        |
| 5}              |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| [country]{.c25} | [String]{.c25}  | []{.c17}        | []{.c17}        |
+-----------------+-----------------+-----------------+-----------------+
| [orcid]{.c25}   | [String (ORCID  | []{.c17}        | []{.c17}        |
|                 | URL)]{.c25}     |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| [email]{.c25}   | [String]{.c25}  | [User           | [[https://api.g |
|                 |                 | email]{.c17}    | ithub.com/users |
|                 |                 |                 | /yochannah](htt |
|                 |                 |                 | ps://www.google |
|                 |                 |                 | .com/url?q=http |
|                 |                 |                 | s://api.github. |
|                 |                 |                 | com/users/yocha |
|                 |                 |                 | nnah&sa=D&ust=1 |
|                 |                 |                 | 564233887504000 |
|                 |                 |                 | ){.c14}]{.c22   |
|                 |                 |                 | .c36}           |
|                 |                 |                 |                 |
|                 |                 |                 | [Field is       |
|                 |                 |                 | "email"]{.c17}  |
+-----------------+-----------------+-----------------+-----------------+
| [tel]{.c25}     | [String]{.c25}  | []{.c17}        | []{.c17}        |
+-----------------+-----------------+-----------------+-----------------+
| [fax]{.c25}     | [String]{.c25}  | []{.c17}        | []{.c17}        |
+-----------------+-----------------+-----------------+-----------------+
| [website]{.c25} | [String         | [User           | [[https://api.g |
|                 | (URL)]{.c25}    | blog]{.c17}     | ithub.com/users |
|                 |                 |                 | /yochannah](htt |
|                 |                 |                 | ps://www.google |
|                 |                 |                 | .com/url?q=http |
|                 |                 |                 | s://api.github. |
|                 |                 |                 | com/users/yocha |
|                 |                 |                 | nnah&sa=D&ust=1 |
|                 |                 |                 | 564233887507000 |
|                 |                 |                 | ){.c14}]{.c22   |
|                 |                 |                 | .c36}           |
|                 |                 |                 |                 |
|                 |                 |                 | [Field is       |
|                 |                 |                 | "blogl"]{.c17}  |
+-----------------+-----------------+-----------------+-----------------+

[]{.c9}

[]{.c9}

[Citation.js]{.c18} {#h.eil8a8h02mht .c30 .c4}
===================

-   [[https://citation.js.org/demo](https://www.google.com/url?q=https://citation.js.org/demo&sa=D&ust=1564233887508000){.c14}]{.c22} Try
    out: Can generate various citation formats from a DOI or another ID
    or citation format.
-   [[https://citation.js.org](https://www.google.com/url?q=https://citation.js.org&sa=D&ust=1564233887508000){.c14}]{.c22}[ Promises
    also CFF, but for now it can't be found it in the code or the
    docs.]{.c9}
-   Any new input formats with parsers can be added as plugins, and
    built-in ones can be overridden
    [![](images/image1.png)]{style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 34.10px; height: 32.00px;"}
-   [[https://doi.org/10.7287/peerj.preprints.27466v2](https://www.google.com/url?q=https://doi.org/10.7287/peerj.preprints.27466v2&sa=D&ust=1564233887508000){.c14}]{.c22}[ (Lars G.
    Willighagen 2019, PeerJ Preprints)]{.c9}
-   [[https://doi.org/10.5281/zenodo.1005176](https://www.google.com/url?q=https://doi.org/10.5281/zenodo.1005176&sa=D&ust=1564233887508000){.c14}]{.c22}[ (Willighagen
    & Willighagen et al. 2017-2018, Zenodo)]{.c9}
-   [Issue (just like Zotero): It DOES NOT retrieve the version of
    software from Zenodo :-(]{.c9}
-   [Open question: Is it possible to plug in also new serialisations ==
    output formats? That could solve the above issue]{.c9}
-   []{.c9}
-   []{.c9}

[]{.c9}

[]{.c9}

[Future work - at eLife sprint:]{.c9}

-   [Deprecate node app and consider converting to a flask app, because
    there are helper apps]{.c9}

<!-- -->

-   [Use doi2cff - works ok]{.c9}
-   [[https://github.com/citation-file-format/github2cff](https://www.google.com/url?q=https://github.com/citation-file-format/github2cff&sa=D&ust=1564233887509000){.c14}]{.c22}[ doesn't
    install on python 2 or 3 machines. Maybe pick it up and fix it.
    ]{.c9}
-   [Don't think Citation.js is needed-- unless someone wants to build
    this in js]{.c9}
-   [CFF TO ZENODO? ]{.c9}

<!-- -->

-   [Extend zenodo to pull good cff data, make the artifact deposit, and
    then zenodo says]{.c9}

<!-- -->

-   [ "we suggest you update your cff to include this DOI - download the
    new file here]{.c9}

<!-- -->

-   [Could also contain your orcid if not present. ]{.c9}

<!-- -->

-   [or copy/paste your creds into the file]{.c9}
-   [Auto-add to cff ON github. Seems a bit scary.]{.c9}

[]{.c9}

[]{.c27}

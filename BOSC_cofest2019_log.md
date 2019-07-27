1.  <span class="c9">Zotero connector browser plugin:</span>

<!-- end list -->

1.  <span class="c9">Fetch reference from github repository</span>

<!-- end list -->

1.  <span class="c9">From bibtex file</span>
2.  <span class="c9">From .cff file</span>
3.  <span class="c9">From zenodo/doi badge on github</span>

<!-- end list -->

2.  <span class="c9">Explore crossref and eventdata</span>

<!-- end list -->

1.  <span>Crossref DOI -\> metadata:
    </span><span class="c22">[https://search.crossref.org/](https://www.google.com/url?q=https://search.crossref.org/&sa=D&ust=1564233887434000)</span>
2.  <span>Datacite DOI -\> metadata:
    </span><span class="c22">[https://search.datacite.org/](https://www.google.com/url?q=https://search.datacite.org/&sa=D&ust=1564233887434000)</span>

<!-- end list -->

1.  <span class="c9">How is this different from altmetrics?</span>

<!-- end list -->

1.  <span class="c9">Open source, not mystery algorithm</span>

<!-- end list -->

3.  <span class="c9">Other ways people publish software (can we fetch
    reference information from them)</span>

<!-- end list -->

1.  <span class="c9">Journal of Open Source Software</span>
2.  <span class="c9">Journal of Open Research Software</span>
3.  <span class="c9">SoftwareX</span>
4.  <span class="c9">GigaScience</span>

<!-- end list -->

4.  <span class="c9">Generate CITATION.cff based on GH info </span>

<!-- end list -->

1.  <span class="c9">what can we get from API</span>

<span class="c9"></span>

<span class="c9"></span>

<span class="c9"></span>

<span>Notes:</span>

<span>Datacite v4.2 scheme:
</span><span class="c22">[https://schema.datacite.org/meta/kernel-4.2/doc/DataCite-MetadataKernel\_v4.2.pdf](https://www.google.com/url?q=https://schema.datacite.org/meta/kernel-4.2/doc/DataCite-MetadataKernel_v4.2.pdf&sa=D&ust=1564233887435000)</span>

<span class="c9"></span>

<span class="c9"></span>

<span class="c22">[https://blog.datacite.org/doi-registrations-software/](https://www.google.com/url?q=https://blog.datacite.org/doi-registrations-software/&sa=D&ust=1564233887435000)</span>

<span class="c9">“As of May 16, 2018, 58,301 DOIs have been registered
for software. We can break down this number by repository where the
software source code is hosted – most DOIs for software have been
registered at Zenodo.”</span>

<span class="c9">CERN.ZENODO - ZENODO - Research.
Shared.        41346</span>

<span class="c9">FIGSHARE.ARS - figshare Academic Research
System        4226</span>

<span class="c9">PURDUE.NCIB - National Cancer Institute,
Bioconductor        2769</span>

<span class="c9">PURDUE.EZID - Purdue University        2463</span>

<span class="c9">OSTI.DOE - DOE Generic        736</span>

<span class="c9">INIST.INRA - Institut National de Recherche
Agronomique        223</span>

<span class="c9">OCEAN.OCEAN - Code Ocean        206</span>

<span class="c9">CRUI.INFNCNAF - Istituto Nazionale di Fisica Nucleare.
Centro Nazionale Analisi Fotogrammi        190</span>

<span class="c9">CDL.UCI - UC Irvine Library        120</span>

<span class="c9">ETHZ.DA-RD - ETHZ Data Archive - Research Data</span>

<span class="c9"></span>

<span class="c9"></span>

<span class="c9"></span>

  - <span class="c9"></span>
  - <span class="c9"></span>

<span>FORCE11 Software Citation Implementation Working Group (SCIWG):
</span><span class="c22">[https://github.com/force11/force11-sciwg](https://www.google.com/url?q=https://github.com/force11/force11-sciwg&sa=D&ust=1564233887436000)</span>

<span class="c9"></span>

  - <span>Challenges Preprint:
    </span><span class="c22">[https://arxiv.org/abs/1905.08674v1](https://www.google.com/url?q=https://arxiv.org/abs/1905.08674v1&sa=D&ust=1564233887436000)</span><span> (or
    Github
    </span><span class="c22">[https://github.com/force11/force11-sciwg/tree/master/Challenges](https://www.google.com/url?q=https://github.com/force11/force11-sciwg/tree/master/Challenges&sa=D&ust=1564233887436000)</span><span class="c9">)</span>

<span class="c9"></span>

<span>RDA software source code identification WG:
</span><span class="c22">[https://www.rd-alliance.org/groups/software-source-code-identification](https://www.google.com/url?q=https://www.rd-alliance.org/groups/software-source-code-identification&sa=D&ust=1564233887436000)</span>

<span class="c9"></span>

<span class="c9">Browser plugin:</span>

<span class="c22">[https://github.com/zotero/zotero-connectors](https://www.google.com/url?q=https://github.com/zotero/zotero-connectors&sa=D&ust=1564233887437000)</span>

<span class="c9"></span>

<span class="c9"></span>

# <span class="c18">Github API</span>

<span class="c22">[REST API
endpoints](https://www.google.com/url?q=https://developer.github.com/v3/apps/available-endpoints/&sa=D&ust=1564233887437000)</span>

<span class="c9"></span>

<span class="c9">users/</span>

  - <span class="c9">name</span>
  - <span class="c9">company</span>
  - <span class="c9">location</span>

<span class="c9"></span>

<span class="c9">repos/</span>

  - <span class="c9">name</span>
  - <span class="c9">full\_name : \[org\]/\[reponame\]</span>
  - <span class="c9">Created\_at</span>

<span class="c9"></span>

<span class="c9"></span>

# <span class="c18">Github - CFF mapping</span>

<span class="c9"></span>

<span id="t.d173c409755a26e49fbbddbf2addb31d44bc8da0"></span><span id="t.0"></span>

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><span class="c7">CFF Key</span></p></td>
<td><p><span class="c7">CFF Data Type</span></p></td>
<td><p><span class="c7">Description</span></p></td>
<td><p><span class="c7">Github</span></p></td>
<td><p><span class="c7">Github query</span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">abbreviation</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The abbreviation of the work</span></p></td>
<td><p><span class="c7">-</span></p></td>
<td><p><span class="c7">-</span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">abstract</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The abstract of a work</span></p></td>
<td><p><span class="c7">Repo description</span></p></td>
<td><p><span class="c22 c36"><a href="https://www.google.com/url?q=https://api.github.com/repos/org/repo&amp;sa=D&amp;ust=1564233887440000" class="c14">https://api.github.com/repos/org/repo</a></span><span class="c7"> field is ‘description”</span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">authors</span></p></td>
<td><p><span class="c36">Collection of entity or </span><span class="c22 c36"><a href="#id.f6zppkp2l56p" class="c14">person objects</a></span></p></td>
<td><p><span class="c7">The author of a work</span></p></td>
<td><p><span class="c7">Contributor names?</span></p></td>
<td><p><span class="c22 c36"><a href="https://www.google.com/url?q=https://api.github.com/repos/org/repo&amp;sa=D&amp;ust=1564233887441000" class="c14">https://api.github.com/repos/org/repo</a></span><span class="c7"> </span></p>
<p><span class="c7">‘contributors_url’</span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">collection-doi</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The DOI of a collection containing the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">collection-title</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The title of a collection or proceedings</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">collection-type</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The type of a collection</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">commit</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The (e.g., Git) commit hash or (e.g., Subversion) revision number of the work</span></p></td>
<td><p><span class="c7">Git commit hash</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">conference</span></p></td>
<td><p><span class="c7">Entity object</span></p></td>
<td><p><span class="c7">The conference where the work was presented</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">contact</span></p></td>
<td><p><span class="c7">Collection of entity or person objects</span></p></td>
<td><p><span class="c7">The contact person, group, company, etc. for a work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">copyright</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The copyright information pertaining to the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">data-type</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The data type of a data set</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">database</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The name of the database where a work was accessed/is stored</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">database-provider</span></p></td>
<td><p><span class="c7">Entity object</span></p></td>
<td><p><span class="c7">The provider of the database where a work was accessed/is stored</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">date-accessed</span></p></td>
<td><p><span class="c7">Date</span></p></td>
<td><p><span class="c7">The date the work has been last accessed</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">date-downloaded</span></p></td>
<td><p><span class="c7">Date</span></p></td>
<td><p><span class="c7">The date the work has been downloaded</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">date-published</span></p></td>
<td><p><span class="c7">Date</span></p></td>
<td><p><span class="c7">The date the work has been published</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">date-released</span></p></td>
<td><p><span class="c7">Date</span></p></td>
<td><p><span class="c7">The date the work has been released</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">department</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The department where a work has been produced</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">doi</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The DOI of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">edition</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The edition of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">editors</span></p></td>
<td><p><span class="c7">Collection of entity or person objects</span></p></td>
<td><p><span class="c7">The editors of a work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">editors-series</span></p></td>
<td><p><span class="c7">Collection of entity or person objects</span></p></td>
<td><p><span class="c7">The editors of a series in which a work has been published</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">end</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The end page of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">entry</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">An entry in the collection that constitutes the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">filename</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The name of the electronic file containing the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">format</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The format in which a work is represented</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">institution</span></p></td>
<td><p><span class="c7">Entity object</span></p></td>
<td><p><span class="c7">The institution where a work has been produced or published</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">isbn</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The ISBN of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">issn</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The ISSN of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">issue</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The issue of a periodical in which a work appeared</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">issue-date</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The publication date of the issue of a periodical in which a work appeared - see note below</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">issue-title</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The name of the issue of a periodical in which the work appeared</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">journal</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The name of the journal/magazine/newspaper/periodical where the work was published</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">keywords</span></p></td>
<td><p><span class="c7">Collection of strings</span></p></td>
<td><p><span class="c7">Keywords pertaining to the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">languages</span></p></td>
<td><p><span class="c7">Collection of ISO 639 language strings</span></p></td>
<td><p><span class="c7">The language of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">license</span></p></td>
<td><p><span class="c7">License string</span></p></td>
<td><p><span class="c7">The license under which a work is licensed</span></p></td>
<td><p><span class="c7">License</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">license-url</span></p></td>
<td><p><span class="c7">String (URL)</span></p></td>
<td><p><span class="c7">The URL of the license text under which a work is licensed</span></p></td>
<td><p><span class="c7">License-URL?</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">location</span></p></td>
<td><p><span class="c7">Entity object</span></p></td>
<td><p><span class="c7">The location of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">loc-start</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The line of code in the file where the work starts</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">loc-end</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The line of code in the file where the work ends</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">medium</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The medium of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">month</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The month in which a work has been published</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">nihmsid</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The NIHMSID of a work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">notes</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">Notes pertaining to the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">number</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The accession number for a work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">number-volumes</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The number of volumes making up the collection in which the work has been published</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">pages</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The number of pages of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">patent-states</span></p></td>
<td><p><span class="c7">Collection of strings</span></p></td>
<td><p><span class="c7">The states for which a patent is granted</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">pmcid</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The PMCID of a work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">publisher</span></p></td>
<td><p><span class="c7">Entity object</span></p></td>
<td><p><span class="c7">The publisher who has published the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">recipients</span></p></td>
<td><p><span class="c7">Collection of entity or person objects</span></p></td>
<td><p><span class="c7">The recipient of a personal communication</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">repository</span></p></td>
<td><p><span class="c7">String (URL)</span></p></td>
<td><p><span class="c7">The repository where the work is stored</span></p></td>
<td><p><span class="c7">Repo URL</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">repository-code</span></p></td>
<td><p><span class="c7">String (URL)</span></p></td>
<td><p><span class="c7">The version control system where the source code of the work is stored</span></p></td>
<td><p><span class="c7">Github?</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">repository-artifact</span></p></td>
<td><p><span class="c7">String (URL)</span></p></td>
<td><p><span class="c7">The repository where the (executable/binary) artifact of the work is stored</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">scope</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The scope of the reference, e.g., the section of the work it adheres to</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">section</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The section of a work that is referenced</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">senders</span></p></td>
<td><p><span class="c7">Collection of entity or person objects</span></p></td>
<td><p><span class="c7">The sender of a personal communication</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">status</span></p></td>
<td><p><span class="c7">Status string</span></p></td>
<td><p><span class="c7">The publication status of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">start</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The start page of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">term</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The term being referenced if the work is a dictionary or encyclopedia</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">thesis-type</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The type of the thesis that is the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">title</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The title of the work</span></p></td>
<td><p><span class="c7">Repo name</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">translators</span></p></td>
<td><p><span class="c7">Collection of entity or person objects</span></p></td>
<td><p><span class="c7">The translator of a work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">type</span></p></td>
<td><p><span class="c7">Reference types string</span></p></td>
<td><p><span class="c7">The type of the work</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">url</span></p></td>
<td><p><span class="c7">String (URL)</span></p></td>
<td><p><span class="c7">The URL of the work</span></p></td>
<td><p><span class="c7">Repo URL</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">version</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The version of the work</span></p></td>
<td><p><span class="c7">release/version?</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">volume</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The volume of the periodical in which a work appeared</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">volume-title</span></p></td>
<td><p><span class="c7">String</span></p></td>
<td><p><span class="c7">The title of the volume in which the work appeared</span></p></td>
<td><p><span class="c7"></span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c7">year</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The year in which a work has been published</span></p></td>
<td><p><span class="c7">created_at -&gt; extract year?</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c7">year-original</span></p></td>
<td><p><span class="c7">Integer</span></p></td>
<td><p><span class="c7">The year of the original publication</span></p></td>
<td><p><span class="c7">created_at -&gt; extract year?</span></p></td>
<td><p><span class="c7"></span></p></td>
</tr>
</tbody>
</table>

<span class="c9"></span>

<span class="c9"></span>

<span id="id.f6zppkp2l56p"></span>

<span class="c9">Person object</span>

<span class="c9"></span>

<span id="t.e692297da267d20057f03e8f5788a52e32332300"></span><span id="t.1"></span>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><span class="c17">CFF keys</span></p></td>
<td><p><span class="c17">CFF property</span></p></td>
<td><p><span class="c17">Github</span></p></td>
<td><p><span class="c17">Github query</span></p></td>
</tr>
<tr class="even">
<td><p><span class="c25">family-names</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c25">given-names</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c25">name-particle</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c25">name-suffix</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c25">affiliation</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17">User company</span></p></td>
<td><p><span class="c17">https://api.github.com/users/yochannah</span></p>
<p><span class="c17">Field is “company”</span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c25">address</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c25">city</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17">User location</span></p></td>
<td><p><span class="c22 c36"><a href="https://www.google.com/url?q=https://api.github.com/users/yochannah&amp;sa=D&amp;ust=1564233887500000" class="c14">https://api.github.com/users/yochannah</a></span></p>
<p><span class="c17">Field is “location”</span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c25">region</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c25">post-code</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c25">country</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c25">orcid</span></p></td>
<td><p><span class="c25">String (ORCID URL)</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c25">email</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17">User email</span></p></td>
<td><p><span class="c22 c36"><a href="https://www.google.com/url?q=https://api.github.com/users/yochannah&amp;sa=D&amp;ust=1564233887504000" class="c14">https://api.github.com/users/yochannah</a></span></p>
<p><span class="c17">Field is “email”</span></p></td>
</tr>
<tr class="even">
<td><p><span class="c25">tel</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="odd">
<td><p><span class="c25">fax</span></p></td>
<td><p><span class="c25">String</span></p></td>
<td><p><span class="c17"></span></p></td>
<td><p><span class="c17"></span></p></td>
</tr>
<tr class="even">
<td><p><span class="c25">website</span></p></td>
<td><p><span class="c25">String (URL)</span></p></td>
<td><p><span class="c17">User blog</span></p></td>
<td><p><span class="c22 c36"><a href="https://www.google.com/url?q=https://api.github.com/users/yochannah&amp;sa=D&amp;ust=1564233887507000" class="c14">https://api.github.com/users/yochannah</a></span></p>
<p><span class="c17">Field is “blogl”</span></p></td>
</tr>
</tbody>
</table>

<span class="c9"></span>

<span class="c9"></span>

# <span class="c18">Citation.js</span>

  - <span class="c22">[https://citation.js.org/demo](https://www.google.com/url?q=https://citation.js.org/demo&sa=D&ust=1564233887508000)</span><span> Try
    out: Can generate various citation formats from a DOI or another ID
    or citation format.</span>
  - <span class="c22">[https://citation.js.org](https://www.google.com/url?q=https://citation.js.org&sa=D&ust=1564233887508000)</span><span class="c9"> Promises
    also CFF, but for now it can’t be found it in the code or the
    docs.</span>
  - <span>Any new input formats with parsers can be added as plugins,
    and built-in ones can be overridden
    </span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 34.10px; height: 32.00px;">![](images/image1.png)</span>
  - <span class="c22">[https://doi.org/10.7287/peerj.preprints.27466v2](https://www.google.com/url?q=https://doi.org/10.7287/peerj.preprints.27466v2&sa=D&ust=1564233887508000)</span><span class="c9"> (Lars
    G. Willighagen 2019, PeerJ Preprints)</span>
  - <span class="c22">[https://doi.org/10.5281/zenodo.1005176](https://www.google.com/url?q=https://doi.org/10.5281/zenodo.1005176&sa=D&ust=1564233887508000)</span><span class="c9"> (Willighagen
    & Willighagen et al. 2017-2018, Zenodo)</span>
  - <span class="c9">Issue (just like Zotero): It DOES NOT retrieve the
    version of software from Zenodo :-(</span>
  - <span class="c9">Open question: Is it possible to plug in also new
    serialisations == output formats? That could solve the above
    issue</span>
  - <span class="c9"></span>
  - <span class="c9"></span>

<span class="c9"></span>

<span class="c9"></span>

# Future work - at eLife sprint: #

  - <span class="c9">Deprecate node app and consider converting to a
    flask app, because there are helper apps</span>

<!-- end list -->

  - <span class="c9">Use doi2cff - works ok</span>
  - <span class="c22">[https://github.com/citation-file-format/github2cff](https://www.google.com/url?q=https://github.com/citation-file-format/github2cff&sa=D&ust=1564233887509000)</span><span class="c9"> doesn’t
    install on python 2 or 3 machines. Maybe pick it up and fix it.
    </span>
  - <span class="c9">Don’t think Citation.js is needed– unless someone
    wants to build this in js</span>
  - <span class="c9">CFF TO ZENODO? </span>

<!-- end list -->

  - <span class="c9">Extend zenodo to pull good cff data, make the
    artifact deposit, and then zenodo says</span>

<!-- end list -->

  - <span class="c9"> “we suggest you update your cff to include this
    DOI - download the new file here</span>

<!-- end list -->

  - <span class="c9">Could also contain your orcid if not present.
    </span>

<!-- end list -->

  - <span class="c9">or copy/paste your creds into the file</span>
  - <span class="c9">Auto-add to cff ON github. Seems a bit
    scary.</span>

<span class="c9"></span>

<span class="c27"></span>

function makeReleaseHtml(version, notes) {
  let notesLog = "";

  for (const note of notes) {
    notesLog += `<li>${note}</li>`;
  }

  if (notes.length == 0) { notesLog += "<li>No notes found for this release. </li>" }

  return `<h2>Updates for ${version}</h2><p><ul>${notesLog}</ul></p>`;
}

function getReleaseNotes() {
  return fetch("../devchanges.json").then((resp) => resp.json());
}

function updateReleases() {
  getReleaseNotes()
    .then(resp => {
      let releases = document.getElementById("releases");
      for (const release in resp) {
        const releaseID = release.replaceAll(".", "_")
        releases.innerHTML += `<div id="release_${releaseID}">${makeReleaseHtml(release, resp[release])}</div>`;
      }
    })
}
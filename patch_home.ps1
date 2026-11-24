$f = 'c:\Users\HP\Desktop\CUTM\IEEE-WEB\ieee-cutm\src\Pages\Home.js'
$c = [System.IO.File]::ReadAllText($f)

$newPhase = @'
      phase: "Phase 05",
      title: "Late Registration & Camera Ready Submission",
      date: "26 - 31 December, 2026",
      month: "DEC",
      day: "26-31",
      year: "2026",
      icon: <FaBell />,
      accent: "#7c3aed",
      start: new Date("2026-12-26"),
      end: new Date("2026-12-31"),
    },
    {
      phase: "Phase 06",
      title: "Conference Dates"
'@

$c = $c -replace 'phase: "Phase 05",\s+title: "Conference Dates"', $newPhase
[System.IO.File]::WriteAllText($f, $c)
Write-Host "Done"

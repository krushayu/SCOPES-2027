$newEntry = @'
    {
      event: 'Late Registration & Camera Ready Submission',
      date: 'December 26th - 31st, 2026',
      desc: 'Last date for late registration and camera-ready paper submission.',
      start: new Date('2026-12-26'), end: new Date('2026-12-31'),
      icon: <FaBell />,
    },
    {
      event: 'Conference Dates',
'@

# Patch ImpDates.js
$f = 'c:\Users\HP\Desktop\CUTM\IEEE-WEB\ieee-cutm\src\Pages\ImpDates.js'
$c = [System.IO.File]::ReadAllText($f)
$c = $c -replace "event: 'Conference Dates',", $newEntry
[System.IO.File]::WriteAllText($f, $c)
Write-Host "ImpDates done"

# Patch Registration.js
$newEntryReg = @'
    {
      phase: 'Phase 05',
      event: 'Late Registration & Camera Ready Submission',
      date: 'December 26th - 31st, 2026',
      month: 'DEC',
      day: '26-31',
      year: '2026',
      note: 'Hard Deadline - No date will be extended.',
      start: new Date('2026-12-26'),
      end: new Date('2026-12-31'),
      icon: <FaBell />,
      accent: '#7c3aed',
    },
    {
      phase: 'Phase 06',
      event: 'Conference Dates',
'@

$f2 = 'c:\Users\HP\Desktop\CUTM\IEEE-WEB\ieee-cutm\src\Pages\Registration.js'
$c2 = [System.IO.File]::ReadAllText($f2)
$c2 = $c2 -replace "phase: 'Phase 05',\s+event: 'Conference Dates',", $newEntryReg
[System.IO.File]::WriteAllText($f2, $c2)
Write-Host "Registration done"

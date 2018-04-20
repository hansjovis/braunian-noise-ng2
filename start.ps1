# Start MongoDB
Start-Process powershell './start-db.ps1'
# Build Angular
ng build
# Start server
node '.\server.js'
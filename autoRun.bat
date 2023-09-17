@echo off
cls

call npm install
if not exist App.tsx goto :exit_app
if not exist node_modules goto :exit_node_modules
npx expo start --android

:exit_app
echo App.tsx not found
pause
exit

:exit_node_modules
echo node_modules not found
pause
exit
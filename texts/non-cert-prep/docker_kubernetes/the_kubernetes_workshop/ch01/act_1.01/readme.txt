The main.go compiles and runs directly from the command line, but it keeps exiting with code 1 when run as a docker container.

The Docker file and the container are so simple that I can't see what would cause the problem.

Their container packtworkshops/the-kubernetes-workshop:pageview runs, so I guess I'll just use it.

I haven't had problems completing the exercises, but it feels like something is odd about this activity.  
I've noticed that the end of chapter activities often seem to involve some knowledge not covered in the chapter.
Although, in this case I'm running their exact code from the solution and it still is exiting code 1 (not even a log entry).

It is possibly related to using go on windows, and compiling for linux, but the executible runs on wsl2.
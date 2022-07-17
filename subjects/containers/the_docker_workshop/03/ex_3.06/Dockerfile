FROM new_busybox:ver_1

RUN echo "#!/bin/sh\n" > /version.sh
RUN echo "echo \"This is version 1\"" >> /version.sh

ENTRYPOINT [ "sh", "/version.sh" ]
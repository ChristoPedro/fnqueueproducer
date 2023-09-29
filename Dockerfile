FROM oraclelinux:8-slim
WORKDIR /function
RUN groupadd --gid 1000 fn && adduser --uid 1000 --gid fn fn

COPY func.py .
COPY requirements.txt .

RUN  microdnf install python39 && \
     microdnf clean all

ADD . /function/
RUN pip3 install --no-cache --no-cache-dir -r requirements.txt
RUN rm -fr /function/.pip_cache ~/.cache/pip requirements.txt func.yaml Dockerfile README.md

ENV PYTHONPATH=/python
ENTRYPOINT ["/usr/local/bin/fdk", "/function/func.py", "handler"]
FROM python:3.10-slim-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends
RUN python -m pip install --upgrade pip

WORKDIR /app

COPY ./requirements.txt /requirements.txt
RUN pip install --no-cache-dir --upgrade -r /requirements.txt

COPY ./issue_sum /app/issue_sum

EXPOSE 5000

CMD ["flask", "--app", "issue_sum.app", "run", "--host=0.0.0.0"]


#!/bin/sh
# You should set the OPENAI_API_KEY before running this script.
# example at commandline: OPENAI_API_KEY=<your api key> ./start_api_server.sh
# example at commandline: OPENAI_API_KEY=<your api key> sh start_api_server.sh
docker run -d -p 5000:5000 -e OPENAI_API_KEY issue_summarizer
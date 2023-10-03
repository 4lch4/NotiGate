# Notification Gateway

This repository is home to an API that serves as a notification/webhook gateway with support for a variety of services.

## Name

The name of this project is NotiGate, but Notification Gateway is likely still scattered throughout and I'll have to clean that up at some point.

## Routes

The following are the officially supported routes/services and how to use the endpoint.

### GitHub

If the incoming payload is from an Action finishing (successfully or not), then the full path would be: `/api/v1/github/action`

This tells NotiGate that the payload is from GitHub and that it is the result of an Action completing.




# Onboarding Widget

## About

The Onboarding Widget keeps track of users' onboarding needs and stores them in the Hubspot CRM.  List items are displayed and can be checked off.  If you need to add or remove any items, simply add or delete them from the user properties in Hubspot.

## How To Embed

The widget can be added to any website by including the following:

```
<script>
        var OnBoard_config = {
            userVID: 2601,
            selector : "checklist"
        }
</script>
<script src="./widget-script.js"></script>
```

The userVID is the unique identifier for your user on Hubspot.  The selector is the ID of the element you want the checkbox to attach to.  It is also the element that when clicked will open and close the widget.

## Current Limitations

Currently the widget aligns to the right, however in future implimintations it will have different options via a config variable.  Also, due to the use of the Hubspot CRM and not an actual DB, the API calls can be slow in their response causing a delay in the updating of checklist.
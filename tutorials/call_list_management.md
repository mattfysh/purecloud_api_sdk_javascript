There might be scenarios where contact records need to be individually added to a campaign.  We can use the PureCloud.outbound.contactlists.contacts.createDialerContacts method to add new records.

Campaigns will most likely need to be restarted after contacts are added.  We can use the PureCloud.outbound.campaigns.getDialerCampaign and PureCloud.outbound.campaigns.updateDialerCampaign methods to start the campaign.  We first call getDialerCampaign to get the current information on the campaign, then we will set campaignStatus to "on" and update the campaign.  It is important to get the campaign details first because there is a version on the campaign and the data that you post to the server needs to have the same version as the current version in the system.

Example Code:
```
var contactListId = "3a662786-7e9e-4d2c-95d6-52b55f706900";
var campaignId = "d4928cd4-f6a2-40b2-9646-2ac2502fa067";

function addContactToList(name, number){
    var contactData = [
                        {
                            "contactListId": contactListId,
                            "data": {
                                "Name": name,
                                "Number": number
                            },
                            "callable": true
                        }
                        ];

    PureCloud.outbound.contactlists.contacts.createDialerContacts(contactListId, contactData, true).done(function(){
        console.log("contact added to list")
    });
}


function startCampaign(){
    //get campaign information
    PureCloud.outbound.campaigns.getDialerCampaign(campaignId).done(function(campaignInfo){
                //if campaign is not on, update it so it is on.
                if(campaignInfo.campaignStatus !== "on"){
                    data.campaignStatus = "on";
                    PureCloud.outbound.campaigns.updateDialerCampaign(campaignId, data);
                }

            });
}

```

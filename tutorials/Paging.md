Methods that return list of data are returned in pages.  These requests will also return page urls for convenience.  The GET methods contain the page you want to get so there are two ways to handle paging. The paged response will look something like This
```
{
  "pageSize": 10,
  "pageNumber": 2,
  "total": 5682,
  "entities": [],
  "selfUri": "https://public-api.us-east-1.mypurecloud.com/api/v1/users?pageSize=10&pageNumber=2",
  "nextUri": "https://public-api.us-east-1.mypurecloud.com/api/v1/users?pageSize=10&pageNumber=3",
  "previousUri": "https://public-api.us-east-1.mypurecloud.com/api/v1/users?pageSize=10&pageNumber=1",
  "lastUri": "https://public-api.us-east-1.mypurecloud.com/api/v1/users?pageSize=10&pageNumber=569",
  "firstUri": "https://public-api.us-east-1.mypurecloud.com/api/v1/users?pageSize=10&pageNumber=1",
  "pageCount": 569
}
```
and has properties that tell the total number of pages given the page size, the current page and the total number of entries.

** Specify Page Index **

We can start by passing in our page size and page number into the method. After we get the response for page 1, we then continue with the request to get page 2.
```
//Get page 1 with a page size of 10
PureCloud.users.GetUsers(10, 1).done(function(data){
    // do something with the response

    //Get page 2 with a page size of 10
    PureCloud.users.GetUsers(10, 2).done(function(data){
        // do something with the response
    });

});
```

** Using the Page URIs **

After getting the first page of users, we can use uris provided in the response to get other pages. The response contains URIs for other pages in the nextUri, previousUri, lastUri and firtUri properties.  Note that if the current page doesn't have a next or previous page then those properties will not be defined on the object.  Using these uris, we have another way to get the next page

```
//Get page 1 with a page size of 10
PureCloud.users.GetUsers(10, 0).done(function(data){
    // do something with the response

    //Get the next page
    PureCloud.get(data.nextUri).done(function(data){
        // do something with the response
    });

});
```

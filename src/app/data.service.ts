export class DataService {
    input: any;
 response: any;
 responseHomePage: any;
setInput(editId)
    { 
        this.input =  editId; 
    }
  getInput()
  {  
      return this.input;
  }
    res:any;
    setResponseOfEdit(response)
    { 
        this.response = response; 
    }
    getResponseOfEdit()
    {
        return this.response;
    }
    setResponseOfUniqueGuardByName(response)
    { 
        this.response = response; 
    }
    getResponseOfUniqueGuardByName()
    {
        return this.response;
    }
    setResponseOfWelcomePage(response)
    { 
        this.responseHomePage = response; 
    }
    getResponseOfWelcomePage()
    {
        return this.responseHomePage;
    }
}
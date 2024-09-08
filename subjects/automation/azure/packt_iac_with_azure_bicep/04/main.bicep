// param storage_account_name 'namebks018343alf'
var my_stg_act = 'storage${uniqueString(resourceGroup().id)}'

resource stg 'Microsoft.Storage/storageAccounts@2021-02-01' = {
  name: my_stg_act
  location: resourceGroup().location
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
  tags:{
    environment: 'dev'
    project: 'my-project'
  }
}



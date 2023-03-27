param location string = 'eastus'

// implict parent / child relationship
resource namebksstorageaccount002 'Microsoft.Storage/storageAccounts@2021-02-01' = {
  name: 'namebksstorageaccount002'
  location: location
  kind: 'StorageV2'
  sku: {
    name: 'Premium_LRS'
  }
}

resource namebksblob1 'Microsoft.Storage/storageAccounts/blobServices@2022-09-01' = {
  name: 'default'
  parent: namebksstorageaccount002
}

resource namebkscontainer001 'Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01' = {
  name: 'namebkscontainer001'
  parent: namebksblob1
}

//////////////////////////////////////////////////////////////////////////////////////
// example of nested parent / child
resource namebksstorageaccount003 'Microsoft.Storage/storageAccounts@2021-02-01' = {
  name: 'namebksstorageaccount003'
  location: location
  kind: 'StorageV2'
  sku: {
    name: 'Premium_LRS'
  }
  
  resource namebksblob002 'blobServices' = {
    name: 'default'
  
    resource namebkscontainer002 'containers' = {
      name: 'namebkscontainer002'
    }
  }
}

param location string = 'eastus'

resource storageaccount 'Microsoft.Storage/storageAccounts@2021-02-01' = {
  name: 'namebksstorage001'
  location: location
  kind: 'StorageV2'
  sku: {
    name: 'Premium_LRS'
  }
  properties: {
    supportsHttpsTrafficOnly: true 
  }
}

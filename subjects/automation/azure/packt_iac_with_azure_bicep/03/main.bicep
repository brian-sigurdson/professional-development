param storagename string
param loc string

resource storageaccount 'Microsoft.Storage/storageAccounts@2021-02-01' = {
  name: storagename
  location: loc
  kind: 'StorageV2'
  sku: {
    name: 'Premium_LRS'
  }
}



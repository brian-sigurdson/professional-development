@description('The name of the storage account.')
param storageName string = toLower('namebks${uniqueString(resourceGroup().id)}')

@description('The type of storage account being deployed')
@allowed([
  'Standard_LRS'
  'Standard_GRS'
  'Standard_ZRS'
  'Premium_LRS'
])
param storageType string = 'Standard_LRS'

resource storage 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: storageName
  tags: {
    displayName: storageName
  }
  location: resourceGroup().location
  kind: 'StorageV2'
  sku: {
    name: storageType
  }
  properties: {
    supportsHttpsTrafficOnly: true
  }
}
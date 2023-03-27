var storageName = toLower('namebks${uniqueString(resourceGroup().id)}')

resource storage 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: storageName
  tags: {
    displayName: 'storageaccount1'
  }
  location: resourceGroup().location
  kind: 'StorageV2'
  sku: {
    name: 'Premium_LRS'
    tier: 'Premium'
  }
  properties: {
    supportsHttpsTrafficOnly: true
  }
}
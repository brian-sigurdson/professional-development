param location string = 'eastus'
var storageAccountName = 'namebkssa${toLower(uniqueString(resourceGroup().id))}'
var serverFarmsName = 'namebkssf${toLower(uniqueString(resourceGroup().id))}'

resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
  }
}

resource serverFarms001 'Microsoft.Web/serverFarms@2022-03-01' = {
  name: serverFarmsName
  location: location
  sku: {
    name: 'F1'
  }
}

resource sites001 'Microsoft.Web/sites@2022-03-01' = {
  name: 'toy-product-launch-${serverFarmsName}'
  location: location
  properties: {
    serverFarmId: serverFarms001.id
    httpsOnly: true
  }
}

param location string = 'eastus'

resource webApplication 'Microsoft.Web/sites@2021-01-15' = {
  name: 'namebkswebapp001'
  location: location
  tags: {
    'hidden-related:${resourceGroup().id}/providers/Microsoft.Web/serverfarms/appServicePlan': 'Resource'
  }
  properties: {
    serverFarmId: appServicePlan.id
  }
}

resource appServicePlan 'Microsoft.Web/serverfarms@2020-12-01' = {
  name: 'namebksappserviceplan001'
  location: location
  sku: {
    name: 'F1'
    capacity: 1
  }
}


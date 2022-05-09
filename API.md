# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eks <a name="Eks" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks"></a>

#### Initializers <a name="Initializers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.Initializer"></a>

```typescript
import { Eks } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

new Eks(scope: Construct, id: string, options?: EksOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.Initializer.parameter.options">options</a></code> | <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions">EksOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.Initializer.parameter.options"></a>

- *Type:* <a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions">EksOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.getString">getString</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.addProvider"></a>

```typescript
public addProvider(provider: TerraformModuleProvider | TerraformProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformModuleProvider | cdktf.TerraformProvider

---

##### `getString` <a name="getString" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.isConstruct"></a>

```typescript
import { Eks } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

Eks.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.providers">providers</a></code> | <code>cdktf.TerraformModuleProvider \| cdktf.TerraformProvider[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthConfigmapYamlOutput">awsAuthConfigmapYamlOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cloudwatchLogGroupArnOutput">cloudwatchLogGroupArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cloudwatchLogGroupNameOutput">cloudwatchLogGroupNameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterAddonsOutput">clusterAddonsOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterArnOutput">clusterArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterCertificateAuthorityDataOutput">clusterCertificateAuthorityDataOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEndpointOutput">clusterEndpointOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIamRoleArnOutput">clusterIamRoleArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIamRoleNameOutput">clusterIamRoleNameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIamRoleUniqueIdOutput">clusterIamRoleUniqueIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIdentityProvidersOutput">clusterIdentityProvidersOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIdOutput">clusterIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterOidcIssuerUrlOutput">clusterOidcIssuerUrlOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterPlatformVersionOutput">clusterPlatformVersionOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterPrimarySecurityGroupIdOutput">clusterPrimarySecurityGroupIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupArnOutput">clusterSecurityGroupArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupIdOutput">clusterSecurityGroupIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterStatusOutput">clusterStatusOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterVersionOutput">clusterVersionOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.eksManagedNodeGroupsAutoscalingGroupNamesOutput">eksManagedNodeGroupsAutoscalingGroupNamesOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.eksManagedNodeGroupsOutput">eksManagedNodeGroupsOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.fargateProfilesOutput">fargateProfilesOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupArnOutput">nodeSecurityGroupArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupIdOutput">nodeSecurityGroupIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.oidcProviderArnOutput">oidcProviderArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.oidcProviderOutput">oidcProviderOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.selfManagedNodeGroupsAutoscalingGroupNamesOutput">selfManagedNodeGroupsAutoscalingGroupNamesOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.selfManagedNodeGroupsOutput">selfManagedNodeGroupsOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterAddons">clusterAddons</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionConfig">clusterEncryptionConfig</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIdentityProviders">clusterIdentityProviders</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupAdditionalRules">clusterSecurityGroupAdditionalRules</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.eksManagedNodeGroupDefaults">eksManagedNodeGroupDefaults</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.eksManagedNodeGroups">eksManagedNodeGroups</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.fargateProfileDefaults">fargateProfileDefaults</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.fargateProfiles">fargateProfiles</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupAdditionalRules">nodeSecurityGroupAdditionalRules</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.selfManagedNodeGroupDefaults">selfManagedNodeGroupDefaults</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.selfManagedNodeGroups">selfManagedNodeGroups</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.attachClusterEncryptionPolicy">attachClusterEncryptionPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthAccounts">awsAuthAccounts</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthFargateProfilePodExecutionRoleArns">awsAuthFargateProfilePodExecutionRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthNodeIamRoleArnsNonWindows">awsAuthNodeIamRoleArnsNonWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthNodeIamRoleArnsWindows">awsAuthNodeIamRoleArnsWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthRoles">awsAuthRoles</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthUsers">awsAuthUsers</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cloudwatchLogGroupKmsKeyId">cloudwatchLogGroupKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cloudwatchLogGroupRetentionInDays">cloudwatchLogGroupRetentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterAdditionalSecurityGroupIds">clusterAdditionalSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEnabledLogTypes">clusterEnabledLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyDescription">clusterEncryptionPolicyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyName">clusterEncryptionPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyPath">clusterEncryptionPolicyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyTags">clusterEncryptionPolicyTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyUseNamePrefix">clusterEncryptionPolicyUseNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEndpointPrivateAccess">clusterEndpointPrivateAccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEndpointPublicAccess">clusterEndpointPublicAccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEndpointPublicAccessCidrs">clusterEndpointPublicAccessCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIamRoleDnsSuffix">clusterIamRoleDnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIpFamily">clusterIpFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupDescription">clusterSecurityGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupName">clusterSecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupTags">clusterSecurityGroupTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupUseNamePrefix">clusterSecurityGroupUseNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterServiceIpv4Cidr">clusterServiceIpv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterTags">clusterTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterTimeouts">clusterTimeouts</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.create">create</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createAwsAuthConfigmap">createAwsAuthConfigmap</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createCloudwatchLogGroup">createCloudwatchLogGroup</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createClusterPrimarySecurityGroupTags">createClusterPrimarySecurityGroupTags</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createClusterSecurityGroup">createClusterSecurityGroup</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createCniIpv6IamPolicy">createCniIpv6IamPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createIamRole">createIamRole</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createNodeSecurityGroup">createNodeSecurityGroup</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.customOidcThumbprints">customOidcThumbprints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.enableIrsa">enableIrsa</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleDescription">iamRoleDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRolePath">iamRolePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleTags">iamRoleTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.manageAwsAuthConfigmap">manageAwsAuthConfigmap</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupDescription">nodeSecurityGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupId">nodeSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupName">nodeSecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupTags">nodeSecurityGroupTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupUseNamePrefix">nodeSecurityGroupUseNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.openidConnectAudiences">openidConnectAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.prefixSeparator">prefixSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.putinKhuylo">putinKhuylo</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.providers"></a>

```typescript
public readonly providers: TerraformModuleProvider | TerraformProvider[];
```

- *Type:* cdktf.TerraformModuleProvider | cdktf.TerraformProvider[]

---

##### `version`<sup>Optional</sup> <a name="version" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `awsAuthConfigmapYamlOutput`<sup>Required</sup> <a name="awsAuthConfigmapYamlOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthConfigmapYamlOutput"></a>

```typescript
public readonly awsAuthConfigmapYamlOutput: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArnOutput`<sup>Required</sup> <a name="cloudwatchLogGroupArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cloudwatchLogGroupArnOutput"></a>

```typescript
public readonly cloudwatchLogGroupArnOutput: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupNameOutput`<sup>Required</sup> <a name="cloudwatchLogGroupNameOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cloudwatchLogGroupNameOutput"></a>

```typescript
public readonly cloudwatchLogGroupNameOutput: string;
```

- *Type:* string

---

##### `clusterAddonsOutput`<sup>Required</sup> <a name="clusterAddonsOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterAddonsOutput"></a>

```typescript
public readonly clusterAddonsOutput: string;
```

- *Type:* string

---

##### `clusterArnOutput`<sup>Required</sup> <a name="clusterArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterArnOutput"></a>

```typescript
public readonly clusterArnOutput: string;
```

- *Type:* string

---

##### `clusterCertificateAuthorityDataOutput`<sup>Required</sup> <a name="clusterCertificateAuthorityDataOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterCertificateAuthorityDataOutput"></a>

```typescript
public readonly clusterCertificateAuthorityDataOutput: string;
```

- *Type:* string

---

##### `clusterEndpointOutput`<sup>Required</sup> <a name="clusterEndpointOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEndpointOutput"></a>

```typescript
public readonly clusterEndpointOutput: string;
```

- *Type:* string

---

##### `clusterIamRoleArnOutput`<sup>Required</sup> <a name="clusterIamRoleArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIamRoleArnOutput"></a>

```typescript
public readonly clusterIamRoleArnOutput: string;
```

- *Type:* string

---

##### `clusterIamRoleNameOutput`<sup>Required</sup> <a name="clusterIamRoleNameOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIamRoleNameOutput"></a>

```typescript
public readonly clusterIamRoleNameOutput: string;
```

- *Type:* string

---

##### `clusterIamRoleUniqueIdOutput`<sup>Required</sup> <a name="clusterIamRoleUniqueIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIamRoleUniqueIdOutput"></a>

```typescript
public readonly clusterIamRoleUniqueIdOutput: string;
```

- *Type:* string

---

##### `clusterIdentityProvidersOutput`<sup>Required</sup> <a name="clusterIdentityProvidersOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIdentityProvidersOutput"></a>

```typescript
public readonly clusterIdentityProvidersOutput: string;
```

- *Type:* string

---

##### `clusterIdOutput`<sup>Required</sup> <a name="clusterIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIdOutput"></a>

```typescript
public readonly clusterIdOutput: string;
```

- *Type:* string

---

##### `clusterOidcIssuerUrlOutput`<sup>Required</sup> <a name="clusterOidcIssuerUrlOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterOidcIssuerUrlOutput"></a>

```typescript
public readonly clusterOidcIssuerUrlOutput: string;
```

- *Type:* string

---

##### `clusterPlatformVersionOutput`<sup>Required</sup> <a name="clusterPlatformVersionOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterPlatformVersionOutput"></a>

```typescript
public readonly clusterPlatformVersionOutput: string;
```

- *Type:* string

---

##### `clusterPrimarySecurityGroupIdOutput`<sup>Required</sup> <a name="clusterPrimarySecurityGroupIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterPrimarySecurityGroupIdOutput"></a>

```typescript
public readonly clusterPrimarySecurityGroupIdOutput: string;
```

- *Type:* string

---

##### `clusterSecurityGroupArnOutput`<sup>Required</sup> <a name="clusterSecurityGroupArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupArnOutput"></a>

```typescript
public readonly clusterSecurityGroupArnOutput: string;
```

- *Type:* string

---

##### `clusterSecurityGroupIdOutput`<sup>Required</sup> <a name="clusterSecurityGroupIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupIdOutput"></a>

```typescript
public readonly clusterSecurityGroupIdOutput: string;
```

- *Type:* string

---

##### `clusterStatusOutput`<sup>Required</sup> <a name="clusterStatusOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterStatusOutput"></a>

```typescript
public readonly clusterStatusOutput: string;
```

- *Type:* string

---

##### `clusterVersionOutput`<sup>Required</sup> <a name="clusterVersionOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterVersionOutput"></a>

```typescript
public readonly clusterVersionOutput: string;
```

- *Type:* string

---

##### `eksManagedNodeGroupsAutoscalingGroupNamesOutput`<sup>Required</sup> <a name="eksManagedNodeGroupsAutoscalingGroupNamesOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.eksManagedNodeGroupsAutoscalingGroupNamesOutput"></a>

```typescript
public readonly eksManagedNodeGroupsAutoscalingGroupNamesOutput: string;
```

- *Type:* string

---

##### `eksManagedNodeGroupsOutput`<sup>Required</sup> <a name="eksManagedNodeGroupsOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.eksManagedNodeGroupsOutput"></a>

```typescript
public readonly eksManagedNodeGroupsOutput: string;
```

- *Type:* string

---

##### `fargateProfilesOutput`<sup>Required</sup> <a name="fargateProfilesOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.fargateProfilesOutput"></a>

```typescript
public readonly fargateProfilesOutput: string;
```

- *Type:* string

---

##### `nodeSecurityGroupArnOutput`<sup>Required</sup> <a name="nodeSecurityGroupArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupArnOutput"></a>

```typescript
public readonly nodeSecurityGroupArnOutput: string;
```

- *Type:* string

---

##### `nodeSecurityGroupIdOutput`<sup>Required</sup> <a name="nodeSecurityGroupIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupIdOutput"></a>

```typescript
public readonly nodeSecurityGroupIdOutput: string;
```

- *Type:* string

---

##### `oidcProviderArnOutput`<sup>Required</sup> <a name="oidcProviderArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.oidcProviderArnOutput"></a>

```typescript
public readonly oidcProviderArnOutput: string;
```

- *Type:* string

---

##### `oidcProviderOutput`<sup>Required</sup> <a name="oidcProviderOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.oidcProviderOutput"></a>

```typescript
public readonly oidcProviderOutput: string;
```

- *Type:* string

---

##### `selfManagedNodeGroupsAutoscalingGroupNamesOutput`<sup>Required</sup> <a name="selfManagedNodeGroupsAutoscalingGroupNamesOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.selfManagedNodeGroupsAutoscalingGroupNamesOutput"></a>

```typescript
public readonly selfManagedNodeGroupsAutoscalingGroupNamesOutput: string;
```

- *Type:* string

---

##### `selfManagedNodeGroupsOutput`<sup>Required</sup> <a name="selfManagedNodeGroupsOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.selfManagedNodeGroupsOutput"></a>

```typescript
public readonly selfManagedNodeGroupsOutput: string;
```

- *Type:* string

---

##### `clusterAddons`<sup>Required</sup> <a name="clusterAddons" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterAddons"></a>

```typescript
public readonly clusterAddons: any;
```

- *Type:* any

---

##### `clusterEncryptionConfig`<sup>Required</sup> <a name="clusterEncryptionConfig" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionConfig"></a>

```typescript
public readonly clusterEncryptionConfig: any;
```

- *Type:* any

---

##### `clusterIdentityProviders`<sup>Required</sup> <a name="clusterIdentityProviders" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIdentityProviders"></a>

```typescript
public readonly clusterIdentityProviders: any;
```

- *Type:* any

---

##### `clusterSecurityGroupAdditionalRules`<sup>Required</sup> <a name="clusterSecurityGroupAdditionalRules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupAdditionalRules"></a>

```typescript
public readonly clusterSecurityGroupAdditionalRules: any;
```

- *Type:* any

---

##### `eksManagedNodeGroupDefaults`<sup>Required</sup> <a name="eksManagedNodeGroupDefaults" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.eksManagedNodeGroupDefaults"></a>

```typescript
public readonly eksManagedNodeGroupDefaults: any;
```

- *Type:* any

---

##### `eksManagedNodeGroups`<sup>Required</sup> <a name="eksManagedNodeGroups" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.eksManagedNodeGroups"></a>

```typescript
public readonly eksManagedNodeGroups: any;
```

- *Type:* any

---

##### `fargateProfileDefaults`<sup>Required</sup> <a name="fargateProfileDefaults" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.fargateProfileDefaults"></a>

```typescript
public readonly fargateProfileDefaults: any;
```

- *Type:* any

---

##### `fargateProfiles`<sup>Required</sup> <a name="fargateProfiles" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.fargateProfiles"></a>

```typescript
public readonly fargateProfiles: any;
```

- *Type:* any

---

##### `nodeSecurityGroupAdditionalRules`<sup>Required</sup> <a name="nodeSecurityGroupAdditionalRules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupAdditionalRules"></a>

```typescript
public readonly nodeSecurityGroupAdditionalRules: any;
```

- *Type:* any

---

##### `selfManagedNodeGroupDefaults`<sup>Required</sup> <a name="selfManagedNodeGroupDefaults" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.selfManagedNodeGroupDefaults"></a>

```typescript
public readonly selfManagedNodeGroupDefaults: any;
```

- *Type:* any

---

##### `selfManagedNodeGroups`<sup>Required</sup> <a name="selfManagedNodeGroups" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.selfManagedNodeGroups"></a>

```typescript
public readonly selfManagedNodeGroups: any;
```

- *Type:* any

---

##### `attachClusterEncryptionPolicy`<sup>Optional</sup> <a name="attachClusterEncryptionPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.attachClusterEncryptionPolicy"></a>

```typescript
public readonly attachClusterEncryptionPolicy: boolean;
```

- *Type:* boolean

---

##### `awsAuthAccounts`<sup>Optional</sup> <a name="awsAuthAccounts" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthAccounts"></a>

```typescript
public readonly awsAuthAccounts: any[];
```

- *Type:* any[]

---

##### `awsAuthFargateProfilePodExecutionRoleArns`<sup>Optional</sup> <a name="awsAuthFargateProfilePodExecutionRoleArns" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthFargateProfilePodExecutionRoleArns"></a>

```typescript
public readonly awsAuthFargateProfilePodExecutionRoleArns: string[];
```

- *Type:* string[]

---

##### `awsAuthNodeIamRoleArnsNonWindows`<sup>Optional</sup> <a name="awsAuthNodeIamRoleArnsNonWindows" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthNodeIamRoleArnsNonWindows"></a>

```typescript
public readonly awsAuthNodeIamRoleArnsNonWindows: string[];
```

- *Type:* string[]

---

##### `awsAuthNodeIamRoleArnsWindows`<sup>Optional</sup> <a name="awsAuthNodeIamRoleArnsWindows" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthNodeIamRoleArnsWindows"></a>

```typescript
public readonly awsAuthNodeIamRoleArnsWindows: string[];
```

- *Type:* string[]

---

##### `awsAuthRoles`<sup>Optional</sup> <a name="awsAuthRoles" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthRoles"></a>

```typescript
public readonly awsAuthRoles: any[];
```

- *Type:* any[]

---

##### `awsAuthUsers`<sup>Optional</sup> <a name="awsAuthUsers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.awsAuthUsers"></a>

```typescript
public readonly awsAuthUsers: any[];
```

- *Type:* any[]

---

##### `cloudwatchLogGroupKmsKeyId`<sup>Optional</sup> <a name="cloudwatchLogGroupKmsKeyId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cloudwatchLogGroupKmsKeyId"></a>

```typescript
public readonly cloudwatchLogGroupKmsKeyId: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupRetentionInDays`<sup>Optional</sup> <a name="cloudwatchLogGroupRetentionInDays" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.cloudwatchLogGroupRetentionInDays"></a>

```typescript
public readonly cloudwatchLogGroupRetentionInDays: number;
```

- *Type:* number

---

##### `clusterAdditionalSecurityGroupIds`<sup>Optional</sup> <a name="clusterAdditionalSecurityGroupIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterAdditionalSecurityGroupIds"></a>

```typescript
public readonly clusterAdditionalSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `clusterEnabledLogTypes`<sup>Optional</sup> <a name="clusterEnabledLogTypes" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEnabledLogTypes"></a>

```typescript
public readonly clusterEnabledLogTypes: string[];
```

- *Type:* string[]

---

##### `clusterEncryptionPolicyDescription`<sup>Optional</sup> <a name="clusterEncryptionPolicyDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyDescription"></a>

```typescript
public readonly clusterEncryptionPolicyDescription: string;
```

- *Type:* string

---

##### `clusterEncryptionPolicyName`<sup>Optional</sup> <a name="clusterEncryptionPolicyName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyName"></a>

```typescript
public readonly clusterEncryptionPolicyName: string;
```

- *Type:* string

---

##### `clusterEncryptionPolicyPath`<sup>Optional</sup> <a name="clusterEncryptionPolicyPath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyPath"></a>

```typescript
public readonly clusterEncryptionPolicyPath: string;
```

- *Type:* string

---

##### `clusterEncryptionPolicyTags`<sup>Optional</sup> <a name="clusterEncryptionPolicyTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyTags"></a>

```typescript
public readonly clusterEncryptionPolicyTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterEncryptionPolicyUseNamePrefix`<sup>Optional</sup> <a name="clusterEncryptionPolicyUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEncryptionPolicyUseNamePrefix"></a>

```typescript
public readonly clusterEncryptionPolicyUseNamePrefix: string;
```

- *Type:* string

---

##### `clusterEndpointPrivateAccess`<sup>Optional</sup> <a name="clusterEndpointPrivateAccess" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEndpointPrivateAccess"></a>

```typescript
public readonly clusterEndpointPrivateAccess: boolean;
```

- *Type:* boolean

---

##### `clusterEndpointPublicAccess`<sup>Optional</sup> <a name="clusterEndpointPublicAccess" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEndpointPublicAccess"></a>

```typescript
public readonly clusterEndpointPublicAccess: boolean;
```

- *Type:* boolean

---

##### `clusterEndpointPublicAccessCidrs`<sup>Optional</sup> <a name="clusterEndpointPublicAccessCidrs" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterEndpointPublicAccessCidrs"></a>

```typescript
public readonly clusterEndpointPublicAccessCidrs: string[];
```

- *Type:* string[]

---

##### `clusterIamRoleDnsSuffix`<sup>Optional</sup> <a name="clusterIamRoleDnsSuffix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIamRoleDnsSuffix"></a>

```typescript
public readonly clusterIamRoleDnsSuffix: string;
```

- *Type:* string

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- *Type:* string

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `clusterSecurityGroupDescription`<sup>Optional</sup> <a name="clusterSecurityGroupDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupDescription"></a>

```typescript
public readonly clusterSecurityGroupDescription: string;
```

- *Type:* string

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- *Type:* string

---

##### `clusterSecurityGroupName`<sup>Optional</sup> <a name="clusterSecurityGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupName"></a>

```typescript
public readonly clusterSecurityGroupName: string;
```

- *Type:* string

---

##### `clusterSecurityGroupTags`<sup>Optional</sup> <a name="clusterSecurityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupTags"></a>

```typescript
public readonly clusterSecurityGroupTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterSecurityGroupUseNamePrefix`<sup>Optional</sup> <a name="clusterSecurityGroupUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterSecurityGroupUseNamePrefix"></a>

```typescript
public readonly clusterSecurityGroupUseNamePrefix: string;
```

- *Type:* string

---

##### `clusterServiceIpv4Cidr`<sup>Optional</sup> <a name="clusterServiceIpv4Cidr" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterServiceIpv4Cidr"></a>

```typescript
public readonly clusterServiceIpv4Cidr: string;
```

- *Type:* string

---

##### `clusterTags`<sup>Optional</sup> <a name="clusterTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterTags"></a>

```typescript
public readonly clusterTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterTimeouts`<sup>Optional</sup> <a name="clusterTimeouts" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterTimeouts"></a>

```typescript
public readonly clusterTimeouts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `create`<sup>Optional</sup> <a name="create" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean

---

##### `createAwsAuthConfigmap`<sup>Optional</sup> <a name="createAwsAuthConfigmap" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createAwsAuthConfigmap"></a>

```typescript
public readonly createAwsAuthConfigmap: boolean;
```

- *Type:* boolean

---

##### `createCloudwatchLogGroup`<sup>Optional</sup> <a name="createCloudwatchLogGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createCloudwatchLogGroup"></a>

```typescript
public readonly createCloudwatchLogGroup: boolean;
```

- *Type:* boolean

---

##### `createClusterPrimarySecurityGroupTags`<sup>Optional</sup> <a name="createClusterPrimarySecurityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createClusterPrimarySecurityGroupTags"></a>

```typescript
public readonly createClusterPrimarySecurityGroupTags: boolean;
```

- *Type:* boolean

---

##### `createClusterSecurityGroup`<sup>Optional</sup> <a name="createClusterSecurityGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createClusterSecurityGroup"></a>

```typescript
public readonly createClusterSecurityGroup: boolean;
```

- *Type:* boolean

---

##### `createCniIpv6IamPolicy`<sup>Optional</sup> <a name="createCniIpv6IamPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createCniIpv6IamPolicy"></a>

```typescript
public readonly createCniIpv6IamPolicy: boolean;
```

- *Type:* boolean

---

##### `createIamRole`<sup>Optional</sup> <a name="createIamRole" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createIamRole"></a>

```typescript
public readonly createIamRole: boolean;
```

- *Type:* boolean

---

##### `createNodeSecurityGroup`<sup>Optional</sup> <a name="createNodeSecurityGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.createNodeSecurityGroup"></a>

```typescript
public readonly createNodeSecurityGroup: boolean;
```

- *Type:* boolean

---

##### `customOidcThumbprints`<sup>Optional</sup> <a name="customOidcThumbprints" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.customOidcThumbprints"></a>

```typescript
public readonly customOidcThumbprints: string[];
```

- *Type:* string[]

---

##### `enableIrsa`<sup>Optional</sup> <a name="enableIrsa" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.enableIrsa"></a>

```typescript
public readonly enableIrsa: boolean;
```

- *Type:* boolean

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- *Type:* string[]

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- *Type:* string

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- *Type:* string

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- *Type:* string

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- *Type:* boolean

---

##### `manageAwsAuthConfigmap`<sup>Optional</sup> <a name="manageAwsAuthConfigmap" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.manageAwsAuthConfigmap"></a>

```typescript
public readonly manageAwsAuthConfigmap: boolean;
```

- *Type:* boolean

---

##### `nodeSecurityGroupDescription`<sup>Optional</sup> <a name="nodeSecurityGroupDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupDescription"></a>

```typescript
public readonly nodeSecurityGroupDescription: string;
```

- *Type:* string

---

##### `nodeSecurityGroupId`<sup>Optional</sup> <a name="nodeSecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupId"></a>

```typescript
public readonly nodeSecurityGroupId: string;
```

- *Type:* string

---

##### `nodeSecurityGroupName`<sup>Optional</sup> <a name="nodeSecurityGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupName"></a>

```typescript
public readonly nodeSecurityGroupName: string;
```

- *Type:* string

---

##### `nodeSecurityGroupTags`<sup>Optional</sup> <a name="nodeSecurityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupTags"></a>

```typescript
public readonly nodeSecurityGroupTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeSecurityGroupUseNamePrefix`<sup>Optional</sup> <a name="nodeSecurityGroupUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.nodeSecurityGroupUseNamePrefix"></a>

```typescript
public readonly nodeSecurityGroupUseNamePrefix: string;
```

- *Type:* string

---

##### `openidConnectAudiences`<sup>Optional</sup> <a name="openidConnectAudiences" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.openidConnectAudiences"></a>

```typescript
public readonly openidConnectAudiences: string[];
```

- *Type:* string[]

---

##### `prefixSeparator`<sup>Optional</sup> <a name="prefixSeparator" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.prefixSeparator"></a>

```typescript
public readonly prefixSeparator: string;
```

- *Type:* string

---

##### `putinKhuylo`<sup>Optional</sup> <a name="putinKhuylo" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.putinKhuylo"></a>

```typescript
public readonly putinKhuylo: boolean;
```

- *Type:* boolean

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---


### EksCluster <a name="EksCluster" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster"></a>

#### Initializers <a name="Initializers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.Initializer"></a>

```typescript
import { EksCluster } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

new EksCluster(scope: Construct, id: string, options: EksOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.Initializer.parameter.options">options</a></code> | <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions">EksOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.Initializer.parameter.options"></a>

- *Type:* <a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions">EksOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.addManagedNodeGroup">addManagedNodeGroup</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.addSelfManagedNodeGroup">addSelfManagedNodeGroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addManagedNodeGroup` <a name="addManagedNodeGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.addManagedNodeGroup"></a>

```typescript
public addManagedNodeGroup(nodeGroupName: string, options: EksEksManagedNodeGroupOptions): EksEksManagedNodeGroup
```

###### `nodeGroupName`<sup>Required</sup> <a name="nodeGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.addManagedNodeGroup.parameter.nodeGroupName"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.addManagedNodeGroup.parameter.options"></a>

- *Type:* <a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions">EksEksManagedNodeGroupOptions</a>

---

##### `addSelfManagedNodeGroup` <a name="addSelfManagedNodeGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.addSelfManagedNodeGroup"></a>

```typescript
public addSelfManagedNodeGroup(nodeGroupName: string, options: EksSelfManagedNodeGroupOptions): EksSelfManagedNodeGroup
```

###### `nodeGroupName`<sup>Required</sup> <a name="nodeGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.addSelfManagedNodeGroup.parameter.nodeGroupName"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.addSelfManagedNodeGroup.parameter.options"></a>

- *Type:* <a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions">EksSelfManagedNodeGroupOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.isConstruct"></a>

```typescript
import { EksCluster } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

EksCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.property.eks">eks</a></code> | <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks">Eks</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `eks`<sup>Required</sup> <a name="eks" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksCluster.property.eks"></a>

```typescript
public readonly eks: Eks;
```

- *Type:* <a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.Eks">Eks</a>

---


### EksEksManagedNodeGroup <a name="EksEksManagedNodeGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup"></a>

#### Initializers <a name="Initializers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.Initializer"></a>

```typescript
import { EksEksManagedNodeGroup } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

new EksEksManagedNodeGroup(scope: Construct, id: string, options?: EksEksManagedNodeGroupOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.Initializer.parameter.options">options</a></code> | <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions">EksEksManagedNodeGroupOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.Initializer.parameter.options"></a>

- *Type:* <a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions">EksEksManagedNodeGroupOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.getString">getString</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.addProvider"></a>

```typescript
public addProvider(provider: TerraformModuleProvider | TerraformProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformModuleProvider | cdktf.TerraformProvider

---

##### `getString` <a name="getString" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.isConstruct"></a>

```typescript
import { EksEksManagedNodeGroup } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

EksEksManagedNodeGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.providers">providers</a></code> | <code>cdktf.TerraformModuleProvider \| cdktf.TerraformProvider[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleArnOutput">iamRoleArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleNameOutput">iamRoleNameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleUniqueIdOutput">iamRoleUniqueIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateArnOutput">launchTemplateArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateIdOutput">launchTemplateIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateLatestVersionOutput">launchTemplateLatestVersionOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupArnOutput">nodeGroupArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupAutoscalingGroupNamesOutput">nodeGroupAutoscalingGroupNamesOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupIdOutput">nodeGroupIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupResourcesOutput">nodeGroupResourcesOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupStatusOutput">nodeGroupStatusOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupArnOutput">securityGroupArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupIdOutput">securityGroupIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.remoteAccess">remoteAccess</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupRules">securityGroupRules</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.taints">taints</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.amiId">amiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.amiReleaseVersion">amiReleaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.amiType">amiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.bootstrapExtraArgs">bootstrapExtraArgs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.capacityType">capacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterAuthBase64">clusterAuthBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterEndpoint">clusterEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterIpFamily">clusterIpFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterPrimarySecurityGroupId">clusterPrimarySecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterServiceIpv4Cidr">clusterServiceIpv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.cpuOptions">cpuOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.create">create</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.createIamRole">createIamRole</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.createLaunchTemplate">createLaunchTemplate</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.createSecurityGroup">createSecurityGroup</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.creditSpecification">creditSpecification</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.desiredSize">desiredSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.enableBootstrapUserData">enableBootstrapUserData</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.enableMonitoring">enableMonitoring</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.enclaveOptions">enclaveOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.forceUpdateVersion">forceUpdateVersion</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleAttachCniPolicy">iamRoleAttachCniPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleDescription">iamRoleDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRolePath">iamRolePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleTags">iamRoleTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateDefaultVersion">launchTemplateDefaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateDescription">launchTemplateDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateTags">launchTemplateTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateUseNamePrefix">launchTemplateUseNamePrefix</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateVersion">launchTemplateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.licenseSpecifications">licenseSpecifications</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.metadataOptions">metadataOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.networkInterfaces">networkInterfaces</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.placement">placement</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.postBootstrapUserData">postBootstrapUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.preBootstrapUserData">preBootstrapUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupDescription">securityGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupTags">securityGroupTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupUseNamePrefix">securityGroupUseNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.timeouts">timeouts</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.updateConfig">updateConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.updateLaunchTemplateDefaultVersion">updateLaunchTemplateDefaultVersion</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.useNamePrefix">useNamePrefix</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.userDataTemplatePath">userDataTemplatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.providers"></a>

```typescript
public readonly providers: TerraformModuleProvider | TerraformProvider[];
```

- *Type:* cdktf.TerraformModuleProvider | cdktf.TerraformProvider[]

---

##### `version`<sup>Optional</sup> <a name="version" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `iamRoleArnOutput`<sup>Required</sup> <a name="iamRoleArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleArnOutput"></a>

```typescript
public readonly iamRoleArnOutput: string;
```

- *Type:* string

---

##### `iamRoleNameOutput`<sup>Required</sup> <a name="iamRoleNameOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleNameOutput"></a>

```typescript
public readonly iamRoleNameOutput: string;
```

- *Type:* string

---

##### `iamRoleUniqueIdOutput`<sup>Required</sup> <a name="iamRoleUniqueIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleUniqueIdOutput"></a>

```typescript
public readonly iamRoleUniqueIdOutput: string;
```

- *Type:* string

---

##### `launchTemplateArnOutput`<sup>Required</sup> <a name="launchTemplateArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateArnOutput"></a>

```typescript
public readonly launchTemplateArnOutput: string;
```

- *Type:* string

---

##### `launchTemplateIdOutput`<sup>Required</sup> <a name="launchTemplateIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateIdOutput"></a>

```typescript
public readonly launchTemplateIdOutput: string;
```

- *Type:* string

---

##### `launchTemplateLatestVersionOutput`<sup>Required</sup> <a name="launchTemplateLatestVersionOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateLatestVersionOutput"></a>

```typescript
public readonly launchTemplateLatestVersionOutput: string;
```

- *Type:* string

---

##### `nodeGroupArnOutput`<sup>Required</sup> <a name="nodeGroupArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupArnOutput"></a>

```typescript
public readonly nodeGroupArnOutput: string;
```

- *Type:* string

---

##### `nodeGroupAutoscalingGroupNamesOutput`<sup>Required</sup> <a name="nodeGroupAutoscalingGroupNamesOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupAutoscalingGroupNamesOutput"></a>

```typescript
public readonly nodeGroupAutoscalingGroupNamesOutput: string;
```

- *Type:* string

---

##### `nodeGroupIdOutput`<sup>Required</sup> <a name="nodeGroupIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupIdOutput"></a>

```typescript
public readonly nodeGroupIdOutput: string;
```

- *Type:* string

---

##### `nodeGroupResourcesOutput`<sup>Required</sup> <a name="nodeGroupResourcesOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupResourcesOutput"></a>

```typescript
public readonly nodeGroupResourcesOutput: string;
```

- *Type:* string

---

##### `nodeGroupStatusOutput`<sup>Required</sup> <a name="nodeGroupStatusOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.nodeGroupStatusOutput"></a>

```typescript
public readonly nodeGroupStatusOutput: string;
```

- *Type:* string

---

##### `securityGroupArnOutput`<sup>Required</sup> <a name="securityGroupArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupArnOutput"></a>

```typescript
public readonly securityGroupArnOutput: string;
```

- *Type:* string

---

##### `securityGroupIdOutput`<sup>Required</sup> <a name="securityGroupIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupIdOutput"></a>

```typescript
public readonly securityGroupIdOutput: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: any;
```

- *Type:* any

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: any;
```

- *Type:* any

---

##### `instanceMarketOptions`<sup>Required</sup> <a name="instanceMarketOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: any;
```

- *Type:* any

---

##### `remoteAccess`<sup>Required</sup> <a name="remoteAccess" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.remoteAccess"></a>

```typescript
public readonly remoteAccess: any;
```

- *Type:* any

---

##### `securityGroupRules`<sup>Required</sup> <a name="securityGroupRules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupRules"></a>

```typescript
public readonly securityGroupRules: any;
```

- *Type:* any

---

##### `taints`<sup>Required</sup> <a name="taints" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.taints"></a>

```typescript
public readonly taints: any;
```

- *Type:* any

---

##### `amiId`<sup>Optional</sup> <a name="amiId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

---

##### `amiReleaseVersion`<sup>Optional</sup> <a name="amiReleaseVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.amiReleaseVersion"></a>

```typescript
public readonly amiReleaseVersion: string;
```

- *Type:* string

---

##### `amiType`<sup>Optional</sup> <a name="amiType" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.amiType"></a>

```typescript
public readonly amiType: string;
```

- *Type:* string

---

##### `bootstrapExtraArgs`<sup>Optional</sup> <a name="bootstrapExtraArgs" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.bootstrapExtraArgs"></a>

```typescript
public readonly bootstrapExtraArgs: string;
```

- *Type:* string

---

##### `capacityType`<sup>Optional</sup> <a name="capacityType" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

---

##### `clusterAuthBase64`<sup>Optional</sup> <a name="clusterAuthBase64" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterAuthBase64"></a>

```typescript
public readonly clusterAuthBase64: string;
```

- *Type:* string

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: string;
```

- *Type:* string

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- *Type:* string

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `clusterPrimarySecurityGroupId`<sup>Optional</sup> <a name="clusterPrimarySecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterPrimarySecurityGroupId"></a>

```typescript
public readonly clusterPrimarySecurityGroupId: string;
```

- *Type:* string

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- *Type:* string

---

##### `clusterServiceIpv4Cidr`<sup>Optional</sup> <a name="clusterServiceIpv4Cidr" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterServiceIpv4Cidr"></a>

```typescript
public readonly clusterServiceIpv4Cidr: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `create`<sup>Optional</sup> <a name="create" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean

---

##### `createIamRole`<sup>Optional</sup> <a name="createIamRole" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.createIamRole"></a>

```typescript
public readonly createIamRole: boolean;
```

- *Type:* boolean

---

##### `createLaunchTemplate`<sup>Optional</sup> <a name="createLaunchTemplate" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.createLaunchTemplate"></a>

```typescript
public readonly createLaunchTemplate: boolean;
```

- *Type:* boolean

---

##### `createSecurityGroup`<sup>Optional</sup> <a name="createSecurityGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.createSecurityGroup"></a>

```typescript
public readonly createSecurityGroup: boolean;
```

- *Type:* boolean

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `desiredSize`<sup>Optional</sup> <a name="desiredSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- *Type:* number

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean;
```

- *Type:* boolean

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean;
```

- *Type:* boolean

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `elasticInferenceAccelerator`<sup>Optional</sup> <a name="elasticInferenceAccelerator" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableBootstrapUserData`<sup>Optional</sup> <a name="enableBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.enableBootstrapUserData"></a>

```typescript
public readonly enableBootstrapUserData: boolean;
```

- *Type:* boolean

---

##### `enableMonitoring`<sup>Optional</sup> <a name="enableMonitoring" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean;
```

- *Type:* boolean

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `forceUpdateVersion`<sup>Optional</sup> <a name="forceUpdateVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.forceUpdateVersion"></a>

```typescript
public readonly forceUpdateVersion: boolean;
```

- *Type:* boolean

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- *Type:* string[]

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `iamRoleAttachCniPolicy`<sup>Optional</sup> <a name="iamRoleAttachCniPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleAttachCniPolicy"></a>

```typescript
public readonly iamRoleAttachCniPolicy: boolean;
```

- *Type:* boolean

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- *Type:* string

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- *Type:* string

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- *Type:* string

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- *Type:* boolean

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchTemplateDefaultVersion`<sup>Optional</sup> <a name="launchTemplateDefaultVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateDefaultVersion"></a>

```typescript
public readonly launchTemplateDefaultVersion: string;
```

- *Type:* string

---

##### `launchTemplateDescription`<sup>Optional</sup> <a name="launchTemplateDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateDescription"></a>

```typescript
public readonly launchTemplateDescription: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `launchTemplateTags`<sup>Optional</sup> <a name="launchTemplateTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateTags"></a>

```typescript
public readonly launchTemplateTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchTemplateUseNamePrefix`<sup>Optional</sup> <a name="launchTemplateUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateUseNamePrefix"></a>

```typescript
public readonly launchTemplateUseNamePrefix: boolean;
```

- *Type:* boolean

---

##### `launchTemplateVersion`<sup>Optional</sup> <a name="launchTemplateVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- *Type:* string

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: any[];
```

- *Type:* any[]

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.placement"></a>

```typescript
public readonly placement: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `postBootstrapUserData`<sup>Optional</sup> <a name="postBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.postBootstrapUserData"></a>

```typescript
public readonly postBootstrapUserData: string;
```

- *Type:* string

---

##### `preBootstrapUserData`<sup>Optional</sup> <a name="preBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.preBootstrapUserData"></a>

```typescript
public readonly preBootstrapUserData: string;
```

- *Type:* string

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

---

##### `securityGroupDescription`<sup>Optional</sup> <a name="securityGroupDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupDescription"></a>

```typescript
public readonly securityGroupDescription: string;
```

- *Type:* string

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

---

##### `securityGroupTags`<sup>Optional</sup> <a name="securityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupTags"></a>

```typescript
public readonly securityGroupTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityGroupUseNamePrefix`<sup>Optional</sup> <a name="securityGroupUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.securityGroupUseNamePrefix"></a>

```typescript
public readonly securityGroupUseNamePrefix: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.timeouts"></a>

```typescript
public readonly timeouts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.updateConfig"></a>

```typescript
public readonly updateConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateLaunchTemplateDefaultVersion`<sup>Optional</sup> <a name="updateLaunchTemplateDefaultVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.updateLaunchTemplateDefaultVersion"></a>

```typescript
public readonly updateLaunchTemplateDefaultVersion: boolean;
```

- *Type:* boolean

---

##### `useNamePrefix`<sup>Optional</sup> <a name="useNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.useNamePrefix"></a>

```typescript
public readonly useNamePrefix: boolean;
```

- *Type:* boolean

---

##### `userDataTemplatePath`<sup>Optional</sup> <a name="userDataTemplatePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.userDataTemplatePath"></a>

```typescript
public readonly userDataTemplatePath: string;
```

- *Type:* string

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroup.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---


### EksSelfManagedNodeGroup <a name="EksSelfManagedNodeGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup"></a>

#### Initializers <a name="Initializers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.Initializer"></a>

```typescript
import { EksSelfManagedNodeGroup } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

new EksSelfManagedNodeGroup(scope: Construct, id: string, options?: EksSelfManagedNodeGroupOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.Initializer.parameter.options">options</a></code> | <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions">EksSelfManagedNodeGroupOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.Initializer.parameter.options"></a>

- *Type:* <a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions">EksSelfManagedNodeGroupOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.getString">getString</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.addProvider"></a>

```typescript
public addProvider(provider: TerraformModuleProvider | TerraformProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformModuleProvider | cdktf.TerraformProvider

---

##### `getString` <a name="getString" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.isConstruct"></a>

```typescript
import { EksSelfManagedNodeGroup } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

EksSelfManagedNodeGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.providers">providers</a></code> | <code>cdktf.TerraformModuleProvider \| cdktf.TerraformProvider[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupArnOutput">autoscalingGroupArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupAvailabilityZonesOutput">autoscalingGroupAvailabilityZonesOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupDefaultCooldownOutput">autoscalingGroupDefaultCooldownOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupDesiredCapacityOutput">autoscalingGroupDesiredCapacityOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupHealthCheckGracePeriodOutput">autoscalingGroupHealthCheckGracePeriodOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupHealthCheckTypeOutput">autoscalingGroupHealthCheckTypeOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupIdOutput">autoscalingGroupIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupMaxSizeOutput">autoscalingGroupMaxSizeOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupMinSizeOutput">autoscalingGroupMinSizeOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupNameOutput">autoscalingGroupNameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupScheduleArnsOutput">autoscalingGroupScheduleArnsOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupVpcZoneIdentifierOutput">autoscalingGroupVpcZoneIdentifierOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamInstanceProfileArnOutput">iamInstanceProfileArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamInstanceProfileIdOutput">iamInstanceProfileIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamInstanceProfileUniqueOutput">iamInstanceProfileUniqueOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleArnOutput">iamRoleArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleNameOutput">iamRoleNameOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleUniqueIdOutput">iamRoleUniqueIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateArnOutput">launchTemplateArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateIdOutput">launchTemplateIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateLatestVersionOutput">launchTemplateLatestVersionOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.platformOutput">platformOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupArnOutput">securityGroupArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupIdOutput">securityGroupIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.instanceRefresh">instanceRefresh</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.mixedInstancesPolicy">mixedInstancesPolicy</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupRules">securityGroupRules</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.warmPool">warmPool</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.amiId">amiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.bootstrapExtraArgs">bootstrapExtraArgs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.capacityRebalance">capacityRebalance</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterAuthBase64">clusterAuthBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterEndpoint">clusterEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterIpFamily">clusterIpFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterPrimarySecurityGroupId">clusterPrimarySecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.cpuOptions">cpuOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.create">create</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.createIamInstanceProfile">createIamInstanceProfile</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.createLaunchTemplate">createLaunchTemplate</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.createSchedule">createSchedule</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.createSecurityGroup">createSecurityGroup</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.creditSpecification">creditSpecification</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.defaultCooldown">defaultCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.deleteTimeout">deleteTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.desiredSize">desiredSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.enabledMetrics">enabledMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.enableMonitoring">enableMonitoring</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.enclaveOptions">enclaveOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.forceDelete">forceDelete</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.hibernationOptions">hibernationOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleAttachCniPolicy">iamRoleAttachCniPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleDescription">iamRoleDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRolePath">iamRolePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleTags">iamRoleTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.initialLifecycleHooks">initialLifecycleHooks</a></code> | <code>{[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateDefaultVersion">launchTemplateDefaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateDescription">launchTemplateDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateTags">launchTemplateTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateUseNamePrefix">launchTemplateUseNamePrefix</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateVersion">launchTemplateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.licenseSpecifications">licenseSpecifications</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.maxInstanceLifetime">maxInstanceLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.metadataOptions">metadataOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.metricsGranularity">metricsGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.minElbCapacity">minElbCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.networkInterfaces">networkInterfaces</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.placement">placement</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.placementGroup">placementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.postBootstrapUserData">postBootstrapUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.preBootstrapUserData">preBootstrapUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.protectFromScaleIn">protectFromScaleIn</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.schedules">schedules</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupDescription">securityGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupTags">securityGroupTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupUseNamePrefix">securityGroupUseNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.suspendedProcesses">suspendedProcesses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.targetGroupArns">targetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.terminationPolicies">terminationPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.updateLaunchTemplateDefaultVersion">updateLaunchTemplateDefaultVersion</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.useDefaultTags">useDefaultTags</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.useMixedInstancesPolicy">useMixedInstancesPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.useNamePrefix">useNamePrefix</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.userDataTemplatePath">userDataTemplatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.waitForCapacityTimeout">waitForCapacityTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.waitForElbCapacity">waitForElbCapacity</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.providers"></a>

```typescript
public readonly providers: TerraformModuleProvider | TerraformProvider[];
```

- *Type:* cdktf.TerraformModuleProvider | cdktf.TerraformProvider[]

---

##### `version`<sup>Optional</sup> <a name="version" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `autoscalingGroupArnOutput`<sup>Required</sup> <a name="autoscalingGroupArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupArnOutput"></a>

```typescript
public readonly autoscalingGroupArnOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupAvailabilityZonesOutput`<sup>Required</sup> <a name="autoscalingGroupAvailabilityZonesOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupAvailabilityZonesOutput"></a>

```typescript
public readonly autoscalingGroupAvailabilityZonesOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupDefaultCooldownOutput`<sup>Required</sup> <a name="autoscalingGroupDefaultCooldownOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupDefaultCooldownOutput"></a>

```typescript
public readonly autoscalingGroupDefaultCooldownOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupDesiredCapacityOutput`<sup>Required</sup> <a name="autoscalingGroupDesiredCapacityOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupDesiredCapacityOutput"></a>

```typescript
public readonly autoscalingGroupDesiredCapacityOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupHealthCheckGracePeriodOutput`<sup>Required</sup> <a name="autoscalingGroupHealthCheckGracePeriodOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupHealthCheckGracePeriodOutput"></a>

```typescript
public readonly autoscalingGroupHealthCheckGracePeriodOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupHealthCheckTypeOutput`<sup>Required</sup> <a name="autoscalingGroupHealthCheckTypeOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupHealthCheckTypeOutput"></a>

```typescript
public readonly autoscalingGroupHealthCheckTypeOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupIdOutput`<sup>Required</sup> <a name="autoscalingGroupIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupIdOutput"></a>

```typescript
public readonly autoscalingGroupIdOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupMaxSizeOutput`<sup>Required</sup> <a name="autoscalingGroupMaxSizeOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupMaxSizeOutput"></a>

```typescript
public readonly autoscalingGroupMaxSizeOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupMinSizeOutput`<sup>Required</sup> <a name="autoscalingGroupMinSizeOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupMinSizeOutput"></a>

```typescript
public readonly autoscalingGroupMinSizeOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupNameOutput`<sup>Required</sup> <a name="autoscalingGroupNameOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupNameOutput"></a>

```typescript
public readonly autoscalingGroupNameOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupScheduleArnsOutput`<sup>Required</sup> <a name="autoscalingGroupScheduleArnsOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupScheduleArnsOutput"></a>

```typescript
public readonly autoscalingGroupScheduleArnsOutput: string;
```

- *Type:* string

---

##### `autoscalingGroupVpcZoneIdentifierOutput`<sup>Required</sup> <a name="autoscalingGroupVpcZoneIdentifierOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.autoscalingGroupVpcZoneIdentifierOutput"></a>

```typescript
public readonly autoscalingGroupVpcZoneIdentifierOutput: string;
```

- *Type:* string

---

##### `iamInstanceProfileArnOutput`<sup>Required</sup> <a name="iamInstanceProfileArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamInstanceProfileArnOutput"></a>

```typescript
public readonly iamInstanceProfileArnOutput: string;
```

- *Type:* string

---

##### `iamInstanceProfileIdOutput`<sup>Required</sup> <a name="iamInstanceProfileIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamInstanceProfileIdOutput"></a>

```typescript
public readonly iamInstanceProfileIdOutput: string;
```

- *Type:* string

---

##### `iamInstanceProfileUniqueOutput`<sup>Required</sup> <a name="iamInstanceProfileUniqueOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamInstanceProfileUniqueOutput"></a>

```typescript
public readonly iamInstanceProfileUniqueOutput: string;
```

- *Type:* string

---

##### `iamRoleArnOutput`<sup>Required</sup> <a name="iamRoleArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleArnOutput"></a>

```typescript
public readonly iamRoleArnOutput: string;
```

- *Type:* string

---

##### `iamRoleNameOutput`<sup>Required</sup> <a name="iamRoleNameOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleNameOutput"></a>

```typescript
public readonly iamRoleNameOutput: string;
```

- *Type:* string

---

##### `iamRoleUniqueIdOutput`<sup>Required</sup> <a name="iamRoleUniqueIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleUniqueIdOutput"></a>

```typescript
public readonly iamRoleUniqueIdOutput: string;
```

- *Type:* string

---

##### `launchTemplateArnOutput`<sup>Required</sup> <a name="launchTemplateArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateArnOutput"></a>

```typescript
public readonly launchTemplateArnOutput: string;
```

- *Type:* string

---

##### `launchTemplateIdOutput`<sup>Required</sup> <a name="launchTemplateIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateIdOutput"></a>

```typescript
public readonly launchTemplateIdOutput: string;
```

- *Type:* string

---

##### `launchTemplateLatestVersionOutput`<sup>Required</sup> <a name="launchTemplateLatestVersionOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateLatestVersionOutput"></a>

```typescript
public readonly launchTemplateLatestVersionOutput: string;
```

- *Type:* string

---

##### `platformOutput`<sup>Required</sup> <a name="platformOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.platformOutput"></a>

```typescript
public readonly platformOutput: string;
```

- *Type:* string

---

##### `securityGroupArnOutput`<sup>Required</sup> <a name="securityGroupArnOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupArnOutput"></a>

```typescript
public readonly securityGroupArnOutput: string;
```

- *Type:* string

---

##### `securityGroupIdOutput`<sup>Required</sup> <a name="securityGroupIdOutput" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupIdOutput"></a>

```typescript
public readonly securityGroupIdOutput: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: any;
```

- *Type:* any

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: any;
```

- *Type:* any

---

##### `instanceMarketOptions`<sup>Required</sup> <a name="instanceMarketOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: any;
```

- *Type:* any

---

##### `instanceRefresh`<sup>Required</sup> <a name="instanceRefresh" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.instanceRefresh"></a>

```typescript
public readonly instanceRefresh: any;
```

- *Type:* any

---

##### `mixedInstancesPolicy`<sup>Required</sup> <a name="mixedInstancesPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.mixedInstancesPolicy"></a>

```typescript
public readonly mixedInstancesPolicy: any;
```

- *Type:* any

---

##### `securityGroupRules`<sup>Required</sup> <a name="securityGroupRules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupRules"></a>

```typescript
public readonly securityGroupRules: any;
```

- *Type:* any

---

##### `warmPool`<sup>Required</sup> <a name="warmPool" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.warmPool"></a>

```typescript
public readonly warmPool: any;
```

- *Type:* any

---

##### `amiId`<sup>Optional</sup> <a name="amiId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `bootstrapExtraArgs`<sup>Optional</sup> <a name="bootstrapExtraArgs" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.bootstrapExtraArgs"></a>

```typescript
public readonly bootstrapExtraArgs: string;
```

- *Type:* string

---

##### `capacityRebalance`<sup>Optional</sup> <a name="capacityRebalance" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.capacityRebalance"></a>

```typescript
public readonly capacityRebalance: boolean;
```

- *Type:* boolean

---

##### `clusterAuthBase64`<sup>Optional</sup> <a name="clusterAuthBase64" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterAuthBase64"></a>

```typescript
public readonly clusterAuthBase64: string;
```

- *Type:* string

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: string;
```

- *Type:* string

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- *Type:* string

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `clusterPrimarySecurityGroupId`<sup>Optional</sup> <a name="clusterPrimarySecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterPrimarySecurityGroupId"></a>

```typescript
public readonly clusterPrimarySecurityGroupId: string;
```

- *Type:* string

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `create`<sup>Optional</sup> <a name="create" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean

---

##### `createIamInstanceProfile`<sup>Optional</sup> <a name="createIamInstanceProfile" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.createIamInstanceProfile"></a>

```typescript
public readonly createIamInstanceProfile: boolean;
```

- *Type:* boolean

---

##### `createLaunchTemplate`<sup>Optional</sup> <a name="createLaunchTemplate" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.createLaunchTemplate"></a>

```typescript
public readonly createLaunchTemplate: boolean;
```

- *Type:* boolean

---

##### `createSchedule`<sup>Optional</sup> <a name="createSchedule" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.createSchedule"></a>

```typescript
public readonly createSchedule: boolean;
```

- *Type:* boolean

---

##### `createSecurityGroup`<sup>Optional</sup> <a name="createSecurityGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.createSecurityGroup"></a>

```typescript
public readonly createSecurityGroup: boolean;
```

- *Type:* boolean

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultCooldown`<sup>Optional</sup> <a name="defaultCooldown" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.defaultCooldown"></a>

```typescript
public readonly defaultCooldown: number;
```

- *Type:* number

---

##### `deleteTimeout`<sup>Optional</sup> <a name="deleteTimeout" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.deleteTimeout"></a>

```typescript
public readonly deleteTimeout: string;
```

- *Type:* string

---

##### `desiredSize`<sup>Optional</sup> <a name="desiredSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- *Type:* number

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean;
```

- *Type:* boolean

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean;
```

- *Type:* boolean

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `elasticInferenceAccelerator`<sup>Optional</sup> <a name="elasticInferenceAccelerator" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enabledMetrics`<sup>Optional</sup> <a name="enabledMetrics" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.enabledMetrics"></a>

```typescript
public readonly enabledMetrics: string[];
```

- *Type:* string[]

---

##### `enableMonitoring`<sup>Optional</sup> <a name="enableMonitoring" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean;
```

- *Type:* boolean

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean;
```

- *Type:* boolean

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: number;
```

- *Type:* number

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `hibernationOptions`<sup>Optional</sup> <a name="hibernationOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="iamInstanceProfileArn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: string;
```

- *Type:* string

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- *Type:* string[]

---

##### `iamRoleAttachCniPolicy`<sup>Optional</sup> <a name="iamRoleAttachCniPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleAttachCniPolicy"></a>

```typescript
public readonly iamRoleAttachCniPolicy: boolean;
```

- *Type:* boolean

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- *Type:* string

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- *Type:* string

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- *Type:* string

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- *Type:* boolean

---

##### `initialLifecycleHooks`<sup>Optional</sup> <a name="initialLifecycleHooks" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.initialLifecycleHooks"></a>

```typescript
public readonly initialLifecycleHooks: {[ key: string ]: string}[];
```

- *Type:* {[ key: string ]: string}[]

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `launchTemplateDefaultVersion`<sup>Optional</sup> <a name="launchTemplateDefaultVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateDefaultVersion"></a>

```typescript
public readonly launchTemplateDefaultVersion: string;
```

- *Type:* string

---

##### `launchTemplateDescription`<sup>Optional</sup> <a name="launchTemplateDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateDescription"></a>

```typescript
public readonly launchTemplateDescription: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `launchTemplateTags`<sup>Optional</sup> <a name="launchTemplateTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateTags"></a>

```typescript
public readonly launchTemplateTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchTemplateUseNamePrefix`<sup>Optional</sup> <a name="launchTemplateUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateUseNamePrefix"></a>

```typescript
public readonly launchTemplateUseNamePrefix: boolean;
```

- *Type:* boolean

---

##### `launchTemplateVersion`<sup>Optional</sup> <a name="launchTemplateVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- *Type:* string

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxInstanceLifetime`<sup>Optional</sup> <a name="maxInstanceLifetime" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.maxInstanceLifetime"></a>

```typescript
public readonly maxInstanceLifetime: number;
```

- *Type:* number

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricsGranularity`<sup>Optional</sup> <a name="metricsGranularity" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.metricsGranularity"></a>

```typescript
public readonly metricsGranularity: string;
```

- *Type:* string

---

##### `minElbCapacity`<sup>Optional</sup> <a name="minElbCapacity" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.minElbCapacity"></a>

```typescript
public readonly minElbCapacity: number;
```

- *Type:* number

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: any[];
```

- *Type:* any[]

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.placement"></a>

```typescript
public readonly placement: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `postBootstrapUserData`<sup>Optional</sup> <a name="postBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.postBootstrapUserData"></a>

```typescript
public readonly postBootstrapUserData: string;
```

- *Type:* string

---

##### `preBootstrapUserData`<sup>Optional</sup> <a name="preBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.preBootstrapUserData"></a>

```typescript
public readonly preBootstrapUserData: string;
```

- *Type:* string

---

##### `protectFromScaleIn`<sup>Optional</sup> <a name="protectFromScaleIn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.protectFromScaleIn"></a>

```typescript
public readonly protectFromScaleIn: boolean;
```

- *Type:* boolean

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.schedules"></a>

```typescript
public readonly schedules: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `securityGroupDescription`<sup>Optional</sup> <a name="securityGroupDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupDescription"></a>

```typescript
public readonly securityGroupDescription: string;
```

- *Type:* string

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

---

##### `securityGroupTags`<sup>Optional</sup> <a name="securityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupTags"></a>

```typescript
public readonly securityGroupTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityGroupUseNamePrefix`<sup>Optional</sup> <a name="securityGroupUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.securityGroupUseNamePrefix"></a>

```typescript
public readonly securityGroupUseNamePrefix: string;
```

- *Type:* string

---

##### `serviceLinkedRoleArn`<sup>Optional</sup> <a name="serviceLinkedRoleArn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.serviceLinkedRoleArn"></a>

```typescript
public readonly serviceLinkedRoleArn: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `suspendedProcesses`<sup>Optional</sup> <a name="suspendedProcesses" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.suspendedProcesses"></a>

```typescript
public readonly suspendedProcesses: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetGroupArns`<sup>Optional</sup> <a name="targetGroupArns" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.targetGroupArns"></a>

```typescript
public readonly targetGroupArns: string[];
```

- *Type:* string[]

---

##### `terminationPolicies`<sup>Optional</sup> <a name="terminationPolicies" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.terminationPolicies"></a>

```typescript
public readonly terminationPolicies: string[];
```

- *Type:* string[]

---

##### `updateLaunchTemplateDefaultVersion`<sup>Optional</sup> <a name="updateLaunchTemplateDefaultVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.updateLaunchTemplateDefaultVersion"></a>

```typescript
public readonly updateLaunchTemplateDefaultVersion: boolean;
```

- *Type:* boolean

---

##### `useDefaultTags`<sup>Optional</sup> <a name="useDefaultTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.useDefaultTags"></a>

```typescript
public readonly useDefaultTags: boolean;
```

- *Type:* boolean

---

##### `useMixedInstancesPolicy`<sup>Optional</sup> <a name="useMixedInstancesPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.useMixedInstancesPolicy"></a>

```typescript
public readonly useMixedInstancesPolicy: boolean;
```

- *Type:* boolean

---

##### `useNamePrefix`<sup>Optional</sup> <a name="useNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.useNamePrefix"></a>

```typescript
public readonly useNamePrefix: boolean;
```

- *Type:* boolean

---

##### `userDataTemplatePath`<sup>Optional</sup> <a name="userDataTemplatePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.userDataTemplatePath"></a>

```typescript
public readonly userDataTemplatePath: string;
```

- *Type:* string

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `waitForCapacityTimeout`<sup>Optional</sup> <a name="waitForCapacityTimeout" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.waitForCapacityTimeout"></a>

```typescript
public readonly waitForCapacityTimeout: string;
```

- *Type:* string

---

##### `waitForElbCapacity`<sup>Optional</sup> <a name="waitForElbCapacity" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroup.property.waitForElbCapacity"></a>

```typescript
public readonly waitForElbCapacity: number;
```

- *Type:* number

---


## Structs <a name="Structs" id="Structs"></a>

### EksEksManagedNodeGroupOptions <a name="EksEksManagedNodeGroupOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions"></a>

#### Initializer <a name="Initializer" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.Initializer"></a>

```typescript
import { EksEksManagedNodeGroupOptions } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

const eksEksManagedNodeGroupOptions: EksEksManagedNodeGroupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.amiId">amiId</a></code> | <code>string</code> | The AMI from which to launch the instance. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.amiReleaseVersion">amiReleaseVersion</a></code> | <code>string</code> | AMI version of the EKS Node Group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.amiType">amiType</a></code> | <code>string</code> | Type of Amazon Machine Image (AMI) associated with the EKS Node Group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>any</code> | Specify volumes to attach to the instance besides the volumes specified by the AMI. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.bootstrapExtraArgs">bootstrapExtraArgs</a></code> | <code>string</code> | Additional arguments passed to the bootstrap script. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code>any</code> | Targeting for EC2 capacity reservations. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.capacityType">capacityType</a></code> | <code>string</code> | Type of capacity associated with the EKS Node Group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterAuthBase64">clusterAuthBase64</a></code> | <code>string</code> | Base64 encoded CA of associated EKS cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterEndpoint">clusterEndpoint</a></code> | <code>string</code> | Endpoint of associated EKS cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterIpFamily">clusterIpFamily</a></code> | <code>string</code> | The IP family used to assign Kubernetes pod and service addresses. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterName">clusterName</a></code> | <code>string</code> | Name of associated EKS cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterPrimarySecurityGroupId">clusterPrimarySecurityGroupId</a></code> | <code>string</code> | The ID of the EKS cluster primary security group to associate with the instance(s). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>string</code> | Cluster control plane security group ID. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterServiceIpv4Cidr">clusterServiceIpv4Cidr</a></code> | <code>string</code> | The CIDR block to assign Kubernetes service IP addresses from. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Kubernetes version. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.cpuOptions">cpuOptions</a></code> | <code>{[ key: string ]: string}</code> | The CPU options for the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.create">create</a></code> | <code>boolean</code> | Determines whether to create EKS managed node group or not. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.createIamRole">createIamRole</a></code> | <code>boolean</code> | Determines whether an IAM role is created or to use an existing IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.createLaunchTemplate">createLaunchTemplate</a></code> | <code>boolean</code> | Determines whether to create a launch template or not. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.createSecurityGroup">createSecurityGroup</a></code> | <code>boolean</code> | Determines whether to create a security group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.creditSpecification">creditSpecification</a></code> | <code>{[ key: string ]: string}</code> | Customize the credit specification of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.desiredSize">desiredSize</a></code> | <code>number</code> | Desired number of instances/nodes. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean</code> | If true, enables EC2 instance termination protection. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.diskSize">diskSize</a></code> | <code>number</code> | Disk size in GiB for nodes. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean</code> | If true, the launched EC2 instance(s) will be EBS-optimized. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code>{[ key: string ]: string}</code> | The elastic GPU to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code> | <code>{[ key: string ]: string}</code> | Configuration block containing an Elastic Inference Accelerator to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.enableBootstrapUserData">enableBootstrapUserData</a></code> | <code>boolean</code> | Determines whether the bootstrap configurations are populated within the user data template. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.enableMonitoring">enableMonitoring</a></code> | <code>boolean</code> | Enables/disables detailed monitoring. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.enclaveOptions">enclaveOptions</a></code> | <code>{[ key: string ]: string}</code> | Enable Nitro Enclaves on launched instances The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.forceUpdateVersion">forceUpdateVersion</a></code> | <code>boolean</code> | Force version update if existing pods are unable to be drained due to a pod disruption budget issue. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code> | <code>string[]</code> | Additional policies to be added to the IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Existing IAM role ARN for the node group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleAttachCniPolicy">iamRoleAttachCniPolicy</a></code> | <code>boolean</code> | Whether to attach the `AmazonEKS_CNI_Policy`/`AmazonEKS_CNI_IPv6_Policy` IAM policy to the IAM IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleDescription">iamRoleDescription</a></code> | <code>string</code> | Description of the role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | Name to use on IAM role created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRolePath">iamRolePath</a></code> | <code>string</code> | IAM role path. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code> | <code>string</code> | ARN of the policy that is used to set the permissions boundary for the IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleTags">iamRoleTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the IAM role created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code> | <code>boolean</code> | Determines whether the IAM role name (`iam_role_name`) is used as a prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code>any</code> | The market (purchasing) option for the instance. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | Set of instance types associated with the EKS Node Group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.kernelId">kernelId</a></code> | <code>string</code> | The kernel ID. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.keyName">keyName</a></code> | <code>string</code> | The key name that should be used for the instance(s). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Key-value map of Kubernetes labels. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateDefaultVersion">launchTemplateDefaultVersion</a></code> | <code>string</code> | Default version of the launch template. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateDescription">launchTemplateDescription</a></code> | <code>string</code> | Description of the launch template. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | Launch template name - either to be created (`var.create_launch_template` = `true`) or existing (`var.create_launch_template` = `false`). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateTags">launchTemplateTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the tag_specifications of launch template created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateUseNamePrefix">launchTemplateUseNamePrefix</a></code> | <code>boolean</code> | Determines whether to use `launch_template_name` as is or create a unique name beginning with the `launch_template_name` as the prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateVersion">launchTemplateVersion</a></code> | <code>string</code> | Launch template version number. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.licenseSpecifications">licenseSpecifications</a></code> | <code>{[ key: string ]: string}</code> | A list of license specifications to associate with The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.maxSize">maxSize</a></code> | <code>number</code> | Maximum number of instances/nodes. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.metadataOptions">metadataOptions</a></code> | <code>{[ key: string ]: string}</code> | Customize the metadata options for the instance. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.minSize">minSize</a></code> | <code>number</code> | Minimum number of instances/nodes. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.name">name</a></code> | <code>string</code> | Name of the EKS managed node group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.networkInterfaces">networkInterfaces</a></code> | <code>any[]</code> | Customize network interfaces to be attached at instance boot time. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.placement">placement</a></code> | <code>{[ key: string ]: string}</code> | The placement of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.platform">platform</a></code> | <code>string</code> | Identifies if the OS platform is `bottlerocket` or `linux` based; |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.postBootstrapUserData">postBootstrapUserData</a></code> | <code>string</code> | User data that is appended to the user data script after of the EKS bootstrap script. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.preBootstrapUserData">preBootstrapUserData</a></code> | <code>string</code> | User data that is injected into the user data script ahead of the EKS bootstrap script. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | The ID of the ram disk. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.remoteAccess">remoteAccess</a></code> | <code>any</code> | Configuration block with remote access settings. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupDescription">securityGroupDescription</a></code> | <code>string</code> | Description for the security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | Name to use on security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupRules">securityGroupRules</a></code> | <code>any</code> | List of security group rules to add to the security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupTags">securityGroupTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupUseNamePrefix">securityGroupUseNamePrefix</a></code> | <code>string</code> | Determines whether the security group name (`security_group_name`) is used as a prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Identifiers of EC2 Subnets to associate with the EKS Node Group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tags to add to all resources. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.taints">taints</a></code> | <code>any</code> | The Kubernetes taints to be applied to the nodes in the node group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.timeouts">timeouts</a></code> | <code>{[ key: string ]: string}</code> | Create, update, and delete timeout configurations for the node group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.updateConfig">updateConfig</a></code> | <code>{[ key: string ]: string}</code> | Configuration block of settings for max unavailable resources during node group updates. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.updateLaunchTemplateDefaultVersion">updateLaunchTemplateDefaultVersion</a></code> | <code>boolean</code> | Whether to update the launch templates default version on each update. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.useNamePrefix">useNamePrefix</a></code> | <code>boolean</code> | Determines whether to use `name` as is or create a unique name beginning with the `name` as the prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.userDataTemplatePath">userDataTemplatePath</a></code> | <code>string</code> | Path to a local, custom user data template file to use when rendering user data. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.vpcId">vpcId</a></code> | <code>string</code> | ID of the VPC where the security group/nodes will be provisioned. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of security group IDs to associate. |

---

##### `amiId`<sup>Optional</sup> <a name="amiId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

The AMI from which to launch the instance.

If not supplied, EKS will use its own default image

---

##### `amiReleaseVersion`<sup>Optional</sup> <a name="amiReleaseVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.amiReleaseVersion"></a>

```typescript
public readonly amiReleaseVersion: string;
```

- *Type:* string

AMI version of the EKS Node Group.

Defaults to latest version for Kubernetes version

---

##### `amiType`<sup>Optional</sup> <a name="amiType" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.amiType"></a>

```typescript
public readonly amiType: string;
```

- *Type:* string

Type of Amazon Machine Image (AMI) associated with the EKS Node Group.

Valid values are `AL2_x86_64`, `AL2_x86_64_GPU`, `AL2_ARM_64`, `CUSTOM`, `BOTTLEROCKET_ARM_64`, `BOTTLEROCKET_x86_64`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: any;
```

- *Type:* any
- *Default:* [object Object]

Specify volumes to attach to the instance besides the volumes specified by the AMI.

---

##### `bootstrapExtraArgs`<sup>Optional</sup> <a name="bootstrapExtraArgs" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.bootstrapExtraArgs"></a>

```typescript
public readonly bootstrapExtraArgs: string;
```

- *Type:* string

Additional arguments passed to the bootstrap script.

When `platform` = `bottlerocket`; these are additional [settings](https://github.com/bottlerocket-os/bottlerocket#settings) that are provided to the Bottlerocket user data

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: any;
```

- *Type:* any

Targeting for EC2 capacity reservations.

---

##### `capacityType`<sup>Optional</sup> <a name="capacityType" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string
- *Default:* ON_DEMAND

Type of capacity associated with the EKS Node Group.

Valid values: `ON_DEMAND`, `SPOT`

---

##### `clusterAuthBase64`<sup>Optional</sup> <a name="clusterAuthBase64" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterAuthBase64"></a>

```typescript
public readonly clusterAuthBase64: string;
```

- *Type:* string

Base64 encoded CA of associated EKS cluster.

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: string;
```

- *Type:* string

Endpoint of associated EKS cluster.

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- *Type:* string

The IP family used to assign Kubernetes pod and service addresses.

Valid values are `ipv4` (default) and `ipv6`

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Name of associated EKS cluster.

---

##### `clusterPrimarySecurityGroupId`<sup>Optional</sup> <a name="clusterPrimarySecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterPrimarySecurityGroupId"></a>

```typescript
public readonly clusterPrimarySecurityGroupId: string;
```

- *Type:* string

The ID of the EKS cluster primary security group to associate with the instance(s).

This is the security group that is automatically created by the EKS service

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- *Type:* string

Cluster control plane security group ID.

---

##### `clusterServiceIpv4Cidr`<sup>Optional</sup> <a name="clusterServiceIpv4Cidr" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterServiceIpv4Cidr"></a>

```typescript
public readonly clusterServiceIpv4Cidr: string;
```

- *Type:* string

The CIDR block to assign Kubernetes service IP addresses from.

If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Kubernetes version.

Defaults to EKS Cluster Kubernetes version

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The CPU options for the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `create`<sup>Optional</sup> <a name="create" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create EKS managed node group or not.

---

##### `createIamRole`<sup>Optional</sup> <a name="createIamRole" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.createIamRole"></a>

```typescript
public readonly createIamRole: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether an IAM role is created or to use an existing IAM role.

---

##### `createLaunchTemplate`<sup>Optional</sup> <a name="createLaunchTemplate" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.createLaunchTemplate"></a>

```typescript
public readonly createLaunchTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create a launch template or not.

If set to `false`, EKS will use its own default launch template

---

##### `createSecurityGroup`<sup>Optional</sup> <a name="createSecurityGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.createSecurityGroup"></a>

```typescript
public readonly createSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create a security group.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Customize the credit specification of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `desiredSize`<sup>Optional</sup> <a name="desiredSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- *Type:* number
- *Default:* 1

Desired number of instances/nodes.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean;
```

- *Type:* boolean

If true, enables EC2 instance termination protection.

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

Disk size in GiB for nodes.

Defaults to `20`

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean;
```

- *Type:* boolean

If true, the launched EC2 instance(s) will be EBS-optimized.

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The elastic GPU to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `elasticInferenceAccelerator`<sup>Optional</sup> <a name="elasticInferenceAccelerator" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configuration block containing an Elastic Inference Accelerator to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `enableBootstrapUserData`<sup>Optional</sup> <a name="enableBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.enableBootstrapUserData"></a>

```typescript
public readonly enableBootstrapUserData: boolean;
```

- *Type:* boolean

Determines whether the bootstrap configurations are populated within the user data template.

---

##### `enableMonitoring`<sup>Optional</sup> <a name="enableMonitoring" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean;
```

- *Type:* boolean
- *Default:* true

Enables/disables detailed monitoring.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Enable Nitro Enclaves on launched instances The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `forceUpdateVersion`<sup>Optional</sup> <a name="forceUpdateVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.forceUpdateVersion"></a>

```typescript
public readonly forceUpdateVersion: boolean;
```

- *Type:* boolean

Force version update if existing pods are unable to be drained due to a pod disruption budget issue.

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- *Type:* string[]

Additional policies to be added to the IAM role.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Existing IAM role ARN for the node group.

Required if `create_iam_role` is set to `false`

---

##### `iamRoleAttachCniPolicy`<sup>Optional</sup> <a name="iamRoleAttachCniPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleAttachCniPolicy"></a>

```typescript
public readonly iamRoleAttachCniPolicy: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to attach the `AmazonEKS_CNI_Policy`/`AmazonEKS_CNI_IPv6_Policy` IAM policy to the IAM IAM role.

WARNING: If set `false` the permissions must be assigned to the `aws-node` DaemonSet pods via another method or nodes will not be able to join the cluster

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- *Type:* string

Description of the role.

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string

Name to use on IAM role created.

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- *Type:* string

IAM role path.

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- *Type:* string

ARN of the policy that is used to set the permissions boundary for the IAM role.

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the IAM role created.

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether the IAM role name (`iam_role_name`) is used as a prefix.

---

##### `instanceMarketOptions`<sup>Optional</sup> <a name="instanceMarketOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: any;
```

- *Type:* any

The market (purchasing) option for the instance.

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

Set of instance types associated with the EKS Node Group.

Defaults to `["t3.medium"]`

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

The kernel ID.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The key name that should be used for the instance(s).

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key-value map of Kubernetes labels.

Only labels that are applied with the EKS API are managed by this argument. Other Kubernetes labels applied to the EKS Node Group will not be managed
The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

---

##### `launchTemplateDefaultVersion`<sup>Optional</sup> <a name="launchTemplateDefaultVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateDefaultVersion"></a>

```typescript
public readonly launchTemplateDefaultVersion: string;
```

- *Type:* string

Default version of the launch template.

---

##### `launchTemplateDescription`<sup>Optional</sup> <a name="launchTemplateDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateDescription"></a>

```typescript
public readonly launchTemplateDescription: string;
```

- *Type:* string

Description of the launch template.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

Launch template name - either to be created (`var.create_launch_template` = `true`) or existing (`var.create_launch_template` = `false`).

---

##### `launchTemplateTags`<sup>Optional</sup> <a name="launchTemplateTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateTags"></a>

```typescript
public readonly launchTemplateTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the tag_specifications of launch template created.

---

##### `launchTemplateUseNamePrefix`<sup>Optional</sup> <a name="launchTemplateUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateUseNamePrefix"></a>

```typescript
public readonly launchTemplateUseNamePrefix: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to use `launch_template_name` as is or create a unique name beginning with the `launch_template_name` as the prefix.

---

##### `launchTemplateVersion`<sup>Optional</sup> <a name="launchTemplateVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- *Type:* string

Launch template version number.

The default is `$Default`

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of license specifications to associate with The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number
- *Default:* 3

Maximum number of instances/nodes.

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Customize the metadata options for the instance.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Minimum number of instances/nodes.

---

##### `name`<sup>Optional</sup> <a name="name" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the EKS managed node group.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: any[];
```

- *Type:* any[]

Customize network interfaces to be attached at instance boot time.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.placement"></a>

```typescript
public readonly placement: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The placement of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string
- *Default:* linux

Identifies if the OS platform is `bottlerocket` or `linux` based;

`windows` is not supported

---

##### `postBootstrapUserData`<sup>Optional</sup> <a name="postBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.postBootstrapUserData"></a>

```typescript
public readonly postBootstrapUserData: string;
```

- *Type:* string

User data that is appended to the user data script after of the EKS bootstrap script.

Not used when `platform` = `bottlerocket`

---

##### `preBootstrapUserData`<sup>Optional</sup> <a name="preBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.preBootstrapUserData"></a>

```typescript
public readonly preBootstrapUserData: string;
```

- *Type:* string

User data that is injected into the user data script ahead of the EKS bootstrap script.

Not used when `platform` = `bottlerocket`

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

The ID of the ram disk.

---

##### `remoteAccess`<sup>Optional</sup> <a name="remoteAccess" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.remoteAccess"></a>

```typescript
public readonly remoteAccess: any;
```

- *Type:* any
- *Default:* [object Object]

Configuration block with remote access settings.

---

##### `securityGroupDescription`<sup>Optional</sup> <a name="securityGroupDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupDescription"></a>

```typescript
public readonly securityGroupDescription: string;
```

- *Type:* string
- *Default:* EKS managed node group security group

Description for the security group created.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

Name to use on security group created.

---

##### `securityGroupRules`<sup>Optional</sup> <a name="securityGroupRules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupRules"></a>

```typescript
public readonly securityGroupRules: any;
```

- *Type:* any
- *Default:* [object Object]

List of security group rules to add to the security group created.

---

##### `securityGroupTags`<sup>Optional</sup> <a name="securityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupTags"></a>

```typescript
public readonly securityGroupTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the security group created.

---

##### `securityGroupUseNamePrefix`<sup>Optional</sup> <a name="securityGroupUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.securityGroupUseNamePrefix"></a>

```typescript
public readonly securityGroupUseNamePrefix: string;
```

- *Type:* string
- *Default:* true

Determines whether the security group name (`security_group_name`) is used as a prefix.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Identifiers of EC2 Subnets to associate with the EKS Node Group.

These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME`

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of tags to add to all resources.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.taints"></a>

```typescript
public readonly taints: any;
```

- *Type:* any
- *Default:* [object Object]

The Kubernetes taints to be applied to the nodes in the node group.

Maximum of 50 taints per node group

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.timeouts"></a>

```typescript
public readonly timeouts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Create, update, and delete timeout configurations for the node group.

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.updateConfig"></a>

```typescript
public readonly updateConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Configuration block of settings for max unavailable resources during node group updates.

---

##### `updateLaunchTemplateDefaultVersion`<sup>Optional</sup> <a name="updateLaunchTemplateDefaultVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.updateLaunchTemplateDefaultVersion"></a>

```typescript
public readonly updateLaunchTemplateDefaultVersion: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to update the launch templates default version on each update.

Conflicts with `launch_template_default_version`

---

##### `useNamePrefix`<sup>Optional</sup> <a name="useNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.useNamePrefix"></a>

```typescript
public readonly useNamePrefix: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to use `name` as is or create a unique name beginning with the `name` as the prefix.

---

##### `userDataTemplatePath`<sup>Optional</sup> <a name="userDataTemplatePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.userDataTemplatePath"></a>

```typescript
public readonly userDataTemplatePath: string;
```

- *Type:* string

Path to a local, custom user data template file to use when rendering user data.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

ID of the VPC where the security group/nodes will be provisioned.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksEksManagedNodeGroupOptions.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

A list of security group IDs to associate.

---

### EksOptions <a name="EksOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions"></a>

#### Initializer <a name="Initializer" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.Initializer"></a>

```typescript
import { EksOptions } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

const eksOptions: EksOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.attachClusterEncryptionPolicy">attachClusterEncryptionPolicy</a></code> | <code>boolean</code> | Indicates whether or not to attach an additional policy for the cluster IAM role to utilize the encryption key provided. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthAccounts">awsAuthAccounts</a></code> | <code>any[]</code> | List of account maps to add to the aws-auth configmap. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthFargateProfilePodExecutionRoleArns">awsAuthFargateProfilePodExecutionRoleArns</a></code> | <code>string[]</code> | List of Fargate profile pod execution role ARNs to add to the aws-auth configmap. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthNodeIamRoleArnsNonWindows">awsAuthNodeIamRoleArnsNonWindows</a></code> | <code>string[]</code> | List of non-Windows based node IAM role ARNs to add to the aws-auth configmap. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthNodeIamRoleArnsWindows">awsAuthNodeIamRoleArnsWindows</a></code> | <code>string[]</code> | List of Windows based node IAM role ARNs to add to the aws-auth configmap. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthRoles">awsAuthRoles</a></code> | <code>any[]</code> | List of role maps to add to the aws-auth configmap. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthUsers">awsAuthUsers</a></code> | <code>any[]</code> | List of user maps to add to the aws-auth configmap. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.cloudwatchLogGroupKmsKeyId">cloudwatchLogGroupKmsKeyId</a></code> | <code>string</code> | If a KMS Key ARN is set, this key will be used to encrypt the corresponding log group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.cloudwatchLogGroupRetentionInDays">cloudwatchLogGroupRetentionInDays</a></code> | <code>number</code> | Number of days to retain log events. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterAdditionalSecurityGroupIds">clusterAdditionalSecurityGroupIds</a></code> | <code>string[]</code> | List of additional, externally created security group IDs to attach to the cluster control plane. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterAddons">clusterAddons</a></code> | <code>any</code> | Map of cluster addon configurations to enable for the cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEnabledLogTypes">clusterEnabledLogTypes</a></code> | <code>string[]</code> | A list of the desired control plane logs to enable. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionConfig">clusterEncryptionConfig</a></code> | <code>any</code> | Configuration block with encryption configuration for the cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyDescription">clusterEncryptionPolicyDescription</a></code> | <code>string</code> | Description of the cluster encryption policy created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyName">clusterEncryptionPolicyName</a></code> | <code>string</code> | Name to use on cluster encryption policy created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyPath">clusterEncryptionPolicyPath</a></code> | <code>string</code> | Cluster encryption policy path. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyTags">clusterEncryptionPolicyTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the cluster encryption policy created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyUseNamePrefix">clusterEncryptionPolicyUseNamePrefix</a></code> | <code>string</code> | Determines whether cluster encryption policy name (`cluster_encryption_policy_name`) is used as a prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEndpointPrivateAccess">clusterEndpointPrivateAccess</a></code> | <code>boolean</code> | Indicates whether or not the Amazon EKS private API server endpoint is enabled. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEndpointPublicAccess">clusterEndpointPublicAccess</a></code> | <code>boolean</code> | Indicates whether or not the Amazon EKS public API server endpoint is enabled. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEndpointPublicAccessCidrs">clusterEndpointPublicAccessCidrs</a></code> | <code>string[]</code> | List of CIDR blocks which can access the Amazon EKS public API server endpoint. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterIamRoleDnsSuffix">clusterIamRoleDnsSuffix</a></code> | <code>string</code> | Base DNS domain name for the current partition (e.g., amazonaws.com in AWS Commercial, amazonaws.com.cn in AWS China). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterIdentityProviders">clusterIdentityProviders</a></code> | <code>any</code> | Map of cluster identity provider configurations to enable for the cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterIpFamily">clusterIpFamily</a></code> | <code>string</code> | The IP family used to assign Kubernetes pod and service addresses. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterName">clusterName</a></code> | <code>string</code> | Name of the EKS cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupAdditionalRules">clusterSecurityGroupAdditionalRules</a></code> | <code>any</code> | List of additional security group rules to add to the cluster security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupDescription">clusterSecurityGroupDescription</a></code> | <code>string</code> | Description of the cluster security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>string</code> | Existing security group ID to be attached to the cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupName">clusterSecurityGroupName</a></code> | <code>string</code> | Name to use on cluster security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupTags">clusterSecurityGroupTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the cluster security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupUseNamePrefix">clusterSecurityGroupUseNamePrefix</a></code> | <code>string</code> | Determines whether cluster security group name (`cluster_security_group_name`) is used as a prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterServiceIpv4Cidr">clusterServiceIpv4Cidr</a></code> | <code>string</code> | The CIDR block to assign Kubernetes service IP addresses from. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterTags">clusterTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterTimeouts">clusterTimeouts</a></code> | <code>{[ key: string ]: string}</code> | Create, update, and delete timeout configurations for the cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Kubernetes `<major>.<minor>` version to use for the EKS cluster (i.e.: `1.21`). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.create">create</a></code> | <code>boolean</code> | Controls if EKS resources should be created (affects nearly all resources). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createAwsAuthConfigmap">createAwsAuthConfigmap</a></code> | <code>boolean</code> | Determines whether to create the aws-auth configmap. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createCloudwatchLogGroup">createCloudwatchLogGroup</a></code> | <code>boolean</code> | Determines whether a log group is created by this module for the cluster logs. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createClusterPrimarySecurityGroupTags">createClusterPrimarySecurityGroupTags</a></code> | <code>boolean</code> | Indicates whether or not to tag the cluster's primary security group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createClusterSecurityGroup">createClusterSecurityGroup</a></code> | <code>boolean</code> | Determines if a security group is created for the cluster or use the existing `cluster_security_group_id`. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createCniIpv6IamPolicy">createCniIpv6IamPolicy</a></code> | <code>boolean</code> | Determines whether to create an [`AmazonEKS_CNI_IPv6_Policy`](https://docs.aws.amazon.com/eks/latest/userguide/cni-iam-role.html#cni-iam-role-create-ipv6-policy). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createIamRole">createIamRole</a></code> | <code>boolean</code> | Determines whether a an IAM role is created or to use an existing IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createNodeSecurityGroup">createNodeSecurityGroup</a></code> | <code>boolean</code> | Determines whether to create a security group for the node groups or use the existing `node_security_group_id`. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.customOidcThumbprints">customOidcThumbprints</a></code> | <code>string[]</code> | Additional list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.eksManagedNodeGroupDefaults">eksManagedNodeGroupDefaults</a></code> | <code>any</code> | Map of EKS managed node group default configurations. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.eksManagedNodeGroups">eksManagedNodeGroups</a></code> | <code>any</code> | Map of EKS managed node group definitions to create. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.enableIrsa">enableIrsa</a></code> | <code>boolean</code> | Determines whether to create an OpenID Connect Provider for EKS to enable IRSA. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.fargateProfileDefaults">fargateProfileDefaults</a></code> | <code>any</code> | Map of Fargate Profile default configurations. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.fargateProfiles">fargateProfiles</a></code> | <code>any</code> | Map of Fargate Profile definitions to create. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code> | <code>string[]</code> | Additional policies to be added to the IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Existing IAM role ARN for the cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleDescription">iamRoleDescription</a></code> | <code>string</code> | Description of the role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | Name to use on IAM role created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRolePath">iamRolePath</a></code> | <code>string</code> | Cluster IAM role path. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code> | <code>string</code> | ARN of the policy that is used to set the permissions boundary for the IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleTags">iamRoleTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the IAM role created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code> | <code>boolean</code> | Determines whether the IAM role name (`iam_role_name`) is used as a prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.manageAwsAuthConfigmap">manageAwsAuthConfigmap</a></code> | <code>boolean</code> | Determines whether to manage the aws-auth configmap. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupAdditionalRules">nodeSecurityGroupAdditionalRules</a></code> | <code>any</code> | List of additional security group rules to add to the node security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupDescription">nodeSecurityGroupDescription</a></code> | <code>string</code> | Description of the node security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupId">nodeSecurityGroupId</a></code> | <code>string</code> | ID of an existing security group to attach to the node groups created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupName">nodeSecurityGroupName</a></code> | <code>string</code> | Name to use on node security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupTags">nodeSecurityGroupTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the node security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupUseNamePrefix">nodeSecurityGroupUseNamePrefix</a></code> | <code>string</code> | Determines whether node security group name (`node_security_group_name`) is used as a prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.openidConnectAudiences">openidConnectAudiences</a></code> | <code>string[]</code> | List of OpenID Connect audience client IDs to add to the IRSA provider. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.prefixSeparator">prefixSeparator</a></code> | <code>string</code> | The separator to use between the prefix and the generated timestamp for resource names. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.putinKhuylo">putinKhuylo</a></code> | <code>boolean</code> | Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity? |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.selfManagedNodeGroupDefaults">selfManagedNodeGroupDefaults</a></code> | <code>any</code> | Map of self-managed node group default configurations. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.selfManagedNodeGroups">selfManagedNodeGroups</a></code> | <code>any</code> | Map of self-managed node group definitions to create. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | A list of subnet IDs where the EKS cluster (ENIs) will be provisioned along with the nodes/node groups. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tags to add to all resources. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.vpcId">vpcId</a></code> | <code>string</code> | ID of the VPC where the cluster and its nodes will be provisioned. |

---

##### `attachClusterEncryptionPolicy`<sup>Optional</sup> <a name="attachClusterEncryptionPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.attachClusterEncryptionPolicy"></a>

```typescript
public readonly attachClusterEncryptionPolicy: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether or not to attach an additional policy for the cluster IAM role to utilize the encryption key provided.

---

##### `awsAuthAccounts`<sup>Optional</sup> <a name="awsAuthAccounts" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthAccounts"></a>

```typescript
public readonly awsAuthAccounts: any[];
```

- *Type:* any[]

List of account maps to add to the aws-auth configmap.

---

##### `awsAuthFargateProfilePodExecutionRoleArns`<sup>Optional</sup> <a name="awsAuthFargateProfilePodExecutionRoleArns" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthFargateProfilePodExecutionRoleArns"></a>

```typescript
public readonly awsAuthFargateProfilePodExecutionRoleArns: string[];
```

- *Type:* string[]

List of Fargate profile pod execution role ARNs to add to the aws-auth configmap.

---

##### `awsAuthNodeIamRoleArnsNonWindows`<sup>Optional</sup> <a name="awsAuthNodeIamRoleArnsNonWindows" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthNodeIamRoleArnsNonWindows"></a>

```typescript
public readonly awsAuthNodeIamRoleArnsNonWindows: string[];
```

- *Type:* string[]

List of non-Windows based node IAM role ARNs to add to the aws-auth configmap.

---

##### `awsAuthNodeIamRoleArnsWindows`<sup>Optional</sup> <a name="awsAuthNodeIamRoleArnsWindows" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthNodeIamRoleArnsWindows"></a>

```typescript
public readonly awsAuthNodeIamRoleArnsWindows: string[];
```

- *Type:* string[]

List of Windows based node IAM role ARNs to add to the aws-auth configmap.

---

##### `awsAuthRoles`<sup>Optional</sup> <a name="awsAuthRoles" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthRoles"></a>

```typescript
public readonly awsAuthRoles: any[];
```

- *Type:* any[]

List of role maps to add to the aws-auth configmap.

---

##### `awsAuthUsers`<sup>Optional</sup> <a name="awsAuthUsers" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.awsAuthUsers"></a>

```typescript
public readonly awsAuthUsers: any[];
```

- *Type:* any[]

List of user maps to add to the aws-auth configmap.

---

##### `cloudwatchLogGroupKmsKeyId`<sup>Optional</sup> <a name="cloudwatchLogGroupKmsKeyId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.cloudwatchLogGroupKmsKeyId"></a>

```typescript
public readonly cloudwatchLogGroupKmsKeyId: string;
```

- *Type:* string

If a KMS Key ARN is set, this key will be used to encrypt the corresponding log group.

Please be sure that the KMS Key has an appropriate key policy (https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html)

---

##### `cloudwatchLogGroupRetentionInDays`<sup>Optional</sup> <a name="cloudwatchLogGroupRetentionInDays" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.cloudwatchLogGroupRetentionInDays"></a>

```typescript
public readonly cloudwatchLogGroupRetentionInDays: number;
```

- *Type:* number
- *Default:* 90

Number of days to retain log events.

Default retention - 90 days

---

##### `clusterAdditionalSecurityGroupIds`<sup>Optional</sup> <a name="clusterAdditionalSecurityGroupIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterAdditionalSecurityGroupIds"></a>

```typescript
public readonly clusterAdditionalSecurityGroupIds: string[];
```

- *Type:* string[]

List of additional, externally created security group IDs to attach to the cluster control plane.

---

##### `clusterAddons`<sup>Optional</sup> <a name="clusterAddons" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterAddons"></a>

```typescript
public readonly clusterAddons: any;
```

- *Type:* any
- *Default:* [object Object]

Map of cluster addon configurations to enable for the cluster.

Addon name can be the map keys or set with `name`

---

##### `clusterEnabledLogTypes`<sup>Optional</sup> <a name="clusterEnabledLogTypes" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEnabledLogTypes"></a>

```typescript
public readonly clusterEnabledLogTypes: string[];
```

- *Type:* string[]
- *Default:* audit,api,authenticator

A list of the desired control plane logs to enable.

For more information, see Amazon EKS Control Plane Logging documentation (https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html)

---

##### `clusterEncryptionConfig`<sup>Optional</sup> <a name="clusterEncryptionConfig" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionConfig"></a>

```typescript
public readonly clusterEncryptionConfig: any;
```

- *Type:* any

Configuration block with encryption configuration for the cluster.

---

##### `clusterEncryptionPolicyDescription`<sup>Optional</sup> <a name="clusterEncryptionPolicyDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyDescription"></a>

```typescript
public readonly clusterEncryptionPolicyDescription: string;
```

- *Type:* string
- *Default:* Cluster encryption policy to allow cluster role to utilize CMK provided

Description of the cluster encryption policy created.

---

##### `clusterEncryptionPolicyName`<sup>Optional</sup> <a name="clusterEncryptionPolicyName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyName"></a>

```typescript
public readonly clusterEncryptionPolicyName: string;
```

- *Type:* string

Name to use on cluster encryption policy created.

---

##### `clusterEncryptionPolicyPath`<sup>Optional</sup> <a name="clusterEncryptionPolicyPath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyPath"></a>

```typescript
public readonly clusterEncryptionPolicyPath: string;
```

- *Type:* string

Cluster encryption policy path.

---

##### `clusterEncryptionPolicyTags`<sup>Optional</sup> <a name="clusterEncryptionPolicyTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyTags"></a>

```typescript
public readonly clusterEncryptionPolicyTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the cluster encryption policy created.

---

##### `clusterEncryptionPolicyUseNamePrefix`<sup>Optional</sup> <a name="clusterEncryptionPolicyUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEncryptionPolicyUseNamePrefix"></a>

```typescript
public readonly clusterEncryptionPolicyUseNamePrefix: string;
```

- *Type:* string
- *Default:* true

Determines whether cluster encryption policy name (`cluster_encryption_policy_name`) is used as a prefix.

---

##### `clusterEndpointPrivateAccess`<sup>Optional</sup> <a name="clusterEndpointPrivateAccess" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEndpointPrivateAccess"></a>

```typescript
public readonly clusterEndpointPrivateAccess: boolean;
```

- *Type:* boolean

Indicates whether or not the Amazon EKS private API server endpoint is enabled.

---

##### `clusterEndpointPublicAccess`<sup>Optional</sup> <a name="clusterEndpointPublicAccess" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEndpointPublicAccess"></a>

```typescript
public readonly clusterEndpointPublicAccess: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether or not the Amazon EKS public API server endpoint is enabled.

---

##### `clusterEndpointPublicAccessCidrs`<sup>Optional</sup> <a name="clusterEndpointPublicAccessCidrs" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterEndpointPublicAccessCidrs"></a>

```typescript
public readonly clusterEndpointPublicAccessCidrs: string[];
```

- *Type:* string[]
- *Default:* 0.0.0.0/0

List of CIDR blocks which can access the Amazon EKS public API server endpoint.

---

##### `clusterIamRoleDnsSuffix`<sup>Optional</sup> <a name="clusterIamRoleDnsSuffix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterIamRoleDnsSuffix"></a>

```typescript
public readonly clusterIamRoleDnsSuffix: string;
```

- *Type:* string

Base DNS domain name for the current partition (e.g., amazonaws.com in AWS Commercial, amazonaws.com.cn in AWS China).

---

##### `clusterIdentityProviders`<sup>Optional</sup> <a name="clusterIdentityProviders" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterIdentityProviders"></a>

```typescript
public readonly clusterIdentityProviders: any;
```

- *Type:* any
- *Default:* [object Object]

Map of cluster identity provider configurations to enable for the cluster.

Note - this is different/separate from IRSA

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- *Type:* string

The IP family used to assign Kubernetes pod and service addresses.

Valid values are `ipv4` (default) and `ipv6`. You can only specify an IP family when you create a cluster, changing this value will force a new cluster to be created

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Name of the EKS cluster.

---

##### `clusterSecurityGroupAdditionalRules`<sup>Optional</sup> <a name="clusterSecurityGroupAdditionalRules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupAdditionalRules"></a>

```typescript
public readonly clusterSecurityGroupAdditionalRules: any;
```

- *Type:* any
- *Default:* [object Object]

List of additional security group rules to add to the cluster security group created.

Set `source_node_security_group = true` inside rules to set the `node_security_group` as source

---

##### `clusterSecurityGroupDescription`<sup>Optional</sup> <a name="clusterSecurityGroupDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupDescription"></a>

```typescript
public readonly clusterSecurityGroupDescription: string;
```

- *Type:* string
- *Default:* EKS cluster security group

Description of the cluster security group created.

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- *Type:* string

Existing security group ID to be attached to the cluster.

Required if `create_cluster_security_group` = `false`

---

##### `clusterSecurityGroupName`<sup>Optional</sup> <a name="clusterSecurityGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupName"></a>

```typescript
public readonly clusterSecurityGroupName: string;
```

- *Type:* string

Name to use on cluster security group created.

---

##### `clusterSecurityGroupTags`<sup>Optional</sup> <a name="clusterSecurityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupTags"></a>

```typescript
public readonly clusterSecurityGroupTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the cluster security group created.

---

##### `clusterSecurityGroupUseNamePrefix`<sup>Optional</sup> <a name="clusterSecurityGroupUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterSecurityGroupUseNamePrefix"></a>

```typescript
public readonly clusterSecurityGroupUseNamePrefix: string;
```

- *Type:* string
- *Default:* true

Determines whether cluster security group name (`cluster_security_group_name`) is used as a prefix.

---

##### `clusterServiceIpv4Cidr`<sup>Optional</sup> <a name="clusterServiceIpv4Cidr" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterServiceIpv4Cidr"></a>

```typescript
public readonly clusterServiceIpv4Cidr: string;
```

- *Type:* string

The CIDR block to assign Kubernetes service IP addresses from.

If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks

---

##### `clusterTags`<sup>Optional</sup> <a name="clusterTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterTags"></a>

```typescript
public readonly clusterTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the cluster.

---

##### `clusterTimeouts`<sup>Optional</sup> <a name="clusterTimeouts" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterTimeouts"></a>

```typescript
public readonly clusterTimeouts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Create, update, and delete timeout configurations for the cluster.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Kubernetes `<major>.<minor>` version to use for the EKS cluster (i.e.: `1.21`).

---

##### `create`<sup>Optional</sup> <a name="create" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean
- *Default:* true

Controls if EKS resources should be created (affects nearly all resources).

---

##### `createAwsAuthConfigmap`<sup>Optional</sup> <a name="createAwsAuthConfigmap" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createAwsAuthConfigmap"></a>

```typescript
public readonly createAwsAuthConfigmap: boolean;
```

- *Type:* boolean

Determines whether to create the aws-auth configmap.

NOTE - this is only intended for scenarios where the configmap does not exist (i.e. - when using only self-managed node groups). Most users should use `manage_aws_auth_configmap`

---

##### `createCloudwatchLogGroup`<sup>Optional</sup> <a name="createCloudwatchLogGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createCloudwatchLogGroup"></a>

```typescript
public readonly createCloudwatchLogGroup: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether a log group is created by this module for the cluster logs.

If not, AWS will automatically create one if logging is enabled

---

##### `createClusterPrimarySecurityGroupTags`<sup>Optional</sup> <a name="createClusterPrimarySecurityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createClusterPrimarySecurityGroupTags"></a>

```typescript
public readonly createClusterPrimarySecurityGroupTags: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether or not to tag the cluster's primary security group.

This security group is created by the EKS service, not the module, and therefore tagging is handled after cluster creation

---

##### `createClusterSecurityGroup`<sup>Optional</sup> <a name="createClusterSecurityGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createClusterSecurityGroup"></a>

```typescript
public readonly createClusterSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true

Determines if a security group is created for the cluster or use the existing `cluster_security_group_id`.

---

##### `createCniIpv6IamPolicy`<sup>Optional</sup> <a name="createCniIpv6IamPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createCniIpv6IamPolicy"></a>

```typescript
public readonly createCniIpv6IamPolicy: boolean;
```

- *Type:* boolean

Determines whether to create an [`AmazonEKS_CNI_IPv6_Policy`](https://docs.aws.amazon.com/eks/latest/userguide/cni-iam-role.html#cni-iam-role-create-ipv6-policy).

---

##### `createIamRole`<sup>Optional</sup> <a name="createIamRole" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createIamRole"></a>

```typescript
public readonly createIamRole: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether a an IAM role is created or to use an existing IAM role.

---

##### `createNodeSecurityGroup`<sup>Optional</sup> <a name="createNodeSecurityGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.createNodeSecurityGroup"></a>

```typescript
public readonly createNodeSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create a security group for the node groups or use the existing `node_security_group_id`.

---

##### `customOidcThumbprints`<sup>Optional</sup> <a name="customOidcThumbprints" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.customOidcThumbprints"></a>

```typescript
public readonly customOidcThumbprints: string[];
```

- *Type:* string[]

Additional list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s).

---

##### `eksManagedNodeGroupDefaults`<sup>Optional</sup> <a name="eksManagedNodeGroupDefaults" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.eksManagedNodeGroupDefaults"></a>

```typescript
public readonly eksManagedNodeGroupDefaults: any;
```

- *Type:* any
- *Default:* [object Object]

Map of EKS managed node group default configurations.

---

##### `eksManagedNodeGroups`<sup>Optional</sup> <a name="eksManagedNodeGroups" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.eksManagedNodeGroups"></a>

```typescript
public readonly eksManagedNodeGroups: any;
```

- *Type:* any
- *Default:* [object Object]

Map of EKS managed node group definitions to create.

---

##### `enableIrsa`<sup>Optional</sup> <a name="enableIrsa" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.enableIrsa"></a>

```typescript
public readonly enableIrsa: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create an OpenID Connect Provider for EKS to enable IRSA.

---

##### `fargateProfileDefaults`<sup>Optional</sup> <a name="fargateProfileDefaults" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.fargateProfileDefaults"></a>

```typescript
public readonly fargateProfileDefaults: any;
```

- *Type:* any
- *Default:* [object Object]

Map of Fargate Profile default configurations.

---

##### `fargateProfiles`<sup>Optional</sup> <a name="fargateProfiles" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.fargateProfiles"></a>

```typescript
public readonly fargateProfiles: any;
```

- *Type:* any
- *Default:* [object Object]

Map of Fargate Profile definitions to create.

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- *Type:* string[]

Additional policies to be added to the IAM role.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Existing IAM role ARN for the cluster.

Required if `create_iam_role` is set to `false`

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- *Type:* string

Description of the role.

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string

Name to use on IAM role created.

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- *Type:* string

Cluster IAM role path.

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- *Type:* string

ARN of the policy that is used to set the permissions boundary for the IAM role.

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the IAM role created.

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether the IAM role name (`iam_role_name`) is used as a prefix.

---

##### `manageAwsAuthConfigmap`<sup>Optional</sup> <a name="manageAwsAuthConfigmap" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.manageAwsAuthConfigmap"></a>

```typescript
public readonly manageAwsAuthConfigmap: boolean;
```

- *Type:* boolean

Determines whether to manage the aws-auth configmap.

---

##### `nodeSecurityGroupAdditionalRules`<sup>Optional</sup> <a name="nodeSecurityGroupAdditionalRules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupAdditionalRules"></a>

```typescript
public readonly nodeSecurityGroupAdditionalRules: any;
```

- *Type:* any
- *Default:* [object Object]

List of additional security group rules to add to the node security group created.

Set `source_cluster_security_group = true` inside rules to set the `cluster_security_group` as source

---

##### `nodeSecurityGroupDescription`<sup>Optional</sup> <a name="nodeSecurityGroupDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupDescription"></a>

```typescript
public readonly nodeSecurityGroupDescription: string;
```

- *Type:* string
- *Default:* EKS node shared security group

Description of the node security group created.

---

##### `nodeSecurityGroupId`<sup>Optional</sup> <a name="nodeSecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupId"></a>

```typescript
public readonly nodeSecurityGroupId: string;
```

- *Type:* string

ID of an existing security group to attach to the node groups created.

---

##### `nodeSecurityGroupName`<sup>Optional</sup> <a name="nodeSecurityGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupName"></a>

```typescript
public readonly nodeSecurityGroupName: string;
```

- *Type:* string

Name to use on node security group created.

---

##### `nodeSecurityGroupTags`<sup>Optional</sup> <a name="nodeSecurityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupTags"></a>

```typescript
public readonly nodeSecurityGroupTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the node security group created.

---

##### `nodeSecurityGroupUseNamePrefix`<sup>Optional</sup> <a name="nodeSecurityGroupUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.nodeSecurityGroupUseNamePrefix"></a>

```typescript
public readonly nodeSecurityGroupUseNamePrefix: string;
```

- *Type:* string
- *Default:* true

Determines whether node security group name (`node_security_group_name`) is used as a prefix.

---

##### `openidConnectAudiences`<sup>Optional</sup> <a name="openidConnectAudiences" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.openidConnectAudiences"></a>

```typescript
public readonly openidConnectAudiences: string[];
```

- *Type:* string[]

List of OpenID Connect audience client IDs to add to the IRSA provider.

---

##### `prefixSeparator`<sup>Optional</sup> <a name="prefixSeparator" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.prefixSeparator"></a>

```typescript
public readonly prefixSeparator: string;
```

- *Type:* string
- *Default:* 

The separator to use between the prefix and the generated timestamp for resource names.

---

##### `putinKhuylo`<sup>Optional</sup> <a name="putinKhuylo" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.putinKhuylo"></a>

```typescript
public readonly putinKhuylo: boolean;
```

- *Type:* boolean
- *Default:* true

Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?

More info: https://en.wikipedia.org/wiki/Putin_khuylo!

---

##### `selfManagedNodeGroupDefaults`<sup>Optional</sup> <a name="selfManagedNodeGroupDefaults" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.selfManagedNodeGroupDefaults"></a>

```typescript
public readonly selfManagedNodeGroupDefaults: any;
```

- *Type:* any
- *Default:* [object Object]

Map of self-managed node group default configurations.

---

##### `selfManagedNodeGroups`<sup>Optional</sup> <a name="selfManagedNodeGroups" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.selfManagedNodeGroups"></a>

```typescript
public readonly selfManagedNodeGroups: any;
```

- *Type:* any
- *Default:* [object Object]

Map of self-managed node group definitions to create.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

A list of subnet IDs where the EKS cluster (ENIs) will be provisioned along with the nodes/node groups.

Node groups can be deployed within a different set of subnet IDs from within the node group configuration

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of tags to add to all resources.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksOptions.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

ID of the VPC where the cluster and its nodes will be provisioned.

---

### EksSelfManagedNodeGroupOptions <a name="EksSelfManagedNodeGroupOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions"></a>

#### Initializer <a name="Initializer" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.Initializer"></a>

```typescript
import { EksSelfManagedNodeGroupOptions } from '@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages'

const eksSelfManagedNodeGroupOptions: EksSelfManagedNodeGroupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.amiId">amiId</a></code> | <code>string</code> | The AMI from which to launch the instance. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | A list of one or more availability zones for the group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>any</code> | Specify volumes to attach to the instance besides the volumes specified by the AMI. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.bootstrapExtraArgs">bootstrapExtraArgs</a></code> | <code>string</code> | Additional arguments passed to the bootstrap script. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.capacityRebalance">capacityRebalance</a></code> | <code>boolean</code> | Indicates whether capacity rebalance is enabled. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code>any</code> | Targeting for EC2 capacity reservations. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterAuthBase64">clusterAuthBase64</a></code> | <code>string</code> | Base64 encoded CA of associated EKS cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterEndpoint">clusterEndpoint</a></code> | <code>string</code> | Endpoint of associated EKS cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterIpFamily">clusterIpFamily</a></code> | <code>string</code> | The IP family used to assign Kubernetes pod and service addresses. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterName">clusterName</a></code> | <code>string</code> | Name of associated EKS cluster. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterPrimarySecurityGroupId">clusterPrimarySecurityGroupId</a></code> | <code>string</code> | The ID of the EKS cluster primary security group to associate with the instance(s). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>string</code> | Cluster control plane security group ID. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Kubernetes cluster version - used to lookup default AMI ID if one is not provided. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.cpuOptions">cpuOptions</a></code> | <code>{[ key: string ]: string}</code> | The CPU options for the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.create">create</a></code> | <code>boolean</code> | Determines whether to create self managed node group or not. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.createIamInstanceProfile">createIamInstanceProfile</a></code> | <code>boolean</code> | Determines whether an IAM instance profile is created or to use an existing IAM instance profile. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.createLaunchTemplate">createLaunchTemplate</a></code> | <code>boolean</code> | Determines whether to create launch template or not. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.createSchedule">createSchedule</a></code> | <code>boolean</code> | Determines whether to create autoscaling group schedule or not. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.createSecurityGroup">createSecurityGroup</a></code> | <code>boolean</code> | Determines whether to create a security group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.creditSpecification">creditSpecification</a></code> | <code>{[ key: string ]: string}</code> | Customize the credit specification of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.defaultCooldown">defaultCooldown</a></code> | <code>number</code> | The amount of time, in seconds, after a scaling activity completes before another scaling activity can start. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.deleteTimeout">deleteTimeout</a></code> | <code>string</code> | Delete timeout to wait for destroying autoscaling group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.desiredSize">desiredSize</a></code> | <code>number</code> | The number of Amazon EC2 instances that should be running in the autoscaling group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean</code> | If true, enables EC2 instance termination protection. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean</code> | If true, the launched EC2 instance will be EBS-optimized. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code>{[ key: string ]: string}</code> | The elastic GPU to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code> | <code>{[ key: string ]: string}</code> | Configuration block containing an Elastic Inference Accelerator to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.enabledMetrics">enabledMetrics</a></code> | <code>string[]</code> | A list of metrics to collect. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.enableMonitoring">enableMonitoring</a></code> | <code>boolean</code> | Enables/disables detailed monitoring. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.enclaveOptions">enclaveOptions</a></code> | <code>{[ key: string ]: string}</code> | Enable Nitro Enclaves on launched instances The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.forceDelete">forceDelete</a></code> | <code>boolean</code> | Allows deleting the Auto Scaling Group without waiting for all instances in the pool to terminate. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>number</code> | Time (in seconds) after instance comes into service before checking health. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | `EC2` or `ELB`. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.hibernationOptions">hibernationOptions</a></code> | <code>{[ key: string ]: string}</code> | The hibernation options for the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an existing IAM instance profile that provides permissions for the node group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code> | <code>string[]</code> | Additional policies to be added to the IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleAttachCniPolicy">iamRoleAttachCniPolicy</a></code> | <code>boolean</code> | Whether to attach the `AmazonEKS_CNI_Policy`/`AmazonEKS_CNI_IPv6_Policy` IAM policy to the IAM IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleDescription">iamRoleDescription</a></code> | <code>string</code> | Description of the role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | Name to use on IAM role created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRolePath">iamRolePath</a></code> | <code>string</code> | IAM role path. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code> | <code>string</code> | ARN of the policy that is used to set the permissions boundary for the IAM role. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleTags">iamRoleTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the IAM role created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code> | <code>boolean</code> | Determines whether cluster IAM role name (`iam_role_name`) is used as a prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.initialLifecycleHooks">initialLifecycleHooks</a></code> | <code>{[ key: string ]: string}[]</code> | One or more Lifecycle Hooks to attach to the Auto Scaling Group before instances are launched. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | Shutdown behavior for the instance. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code>any</code> | The market (purchasing) option for the instance. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.instanceRefresh">instanceRefresh</a></code> | <code>any</code> | If this block is configured, start an Instance Refresh when this Auto Scaling Group is updated. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.instanceType">instanceType</a></code> | <code>string</code> | The type of the instance to launch. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.kernelId">kernelId</a></code> | <code>string</code> | The kernel ID. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.keyName">keyName</a></code> | <code>string</code> | The key name that should be used for the instance. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateDefaultVersion">launchTemplateDefaultVersion</a></code> | <code>string</code> | Default Version of the launch template. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateDescription">launchTemplateDescription</a></code> | <code>string</code> | Description of the launch template. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | Launch template name - either to be created (`var.create_launch_template` = `true`) or existing (`var.create_launch_template` = `false`). |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateTags">launchTemplateTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the tag_specifications of launch template created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateUseNamePrefix">launchTemplateUseNamePrefix</a></code> | <code>boolean</code> | Determines whether to use `launch_template_name` as is or create a unique name beginning with the `launch_template_name` as the prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateVersion">launchTemplateVersion</a></code> | <code>string</code> | Launch template version. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.licenseSpecifications">licenseSpecifications</a></code> | <code>{[ key: string ]: string}</code> | A list of license specifications to associate with The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.maxInstanceLifetime">maxInstanceLifetime</a></code> | <code>number</code> | The maximum amount of time, in seconds, that an instance can be in service, values must be either equal to 0 or between 604800 and 31536000 seconds. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.maxSize">maxSize</a></code> | <code>number</code> | The maximum size of the autoscaling group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.metadataOptions">metadataOptions</a></code> | <code>{[ key: string ]: string}</code> | Customize the metadata options for the instance. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.metricsGranularity">metricsGranularity</a></code> | <code>string</code> | The granularity to associate with the metrics to collect. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.minElbCapacity">minElbCapacity</a></code> | <code>number</code> | Setting this causes Terraform to wait for this number of instances to show up healthy in the ELB only on creation. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.minSize">minSize</a></code> | <code>number</code> | The minimum size of the autoscaling group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.mixedInstancesPolicy">mixedInstancesPolicy</a></code> | <code>any</code> | Configuration block containing settings to define launch targets for Auto Scaling groups. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.name">name</a></code> | <code>string</code> | Name of the Self managed Node Group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.networkInterfaces">networkInterfaces</a></code> | <code>any[]</code> | Customize network interfaces to be attached at instance boot time. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.placement">placement</a></code> | <code>{[ key: string ]: string}</code> | The placement of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.placementGroup">placementGroup</a></code> | <code>string</code> | The name of the placement group into which you'll launch your instances, if any. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.platform">platform</a></code> | <code>string</code> | Identifies if the OS platform is `bottlerocket`, `linux`, or `windows` based. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.postBootstrapUserData">postBootstrapUserData</a></code> | <code>string</code> | User data that is appended to the user data script after of the EKS bootstrap script. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.preBootstrapUserData">preBootstrapUserData</a></code> | <code>string</code> | User data that is injected into the user data script ahead of the EKS bootstrap script. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.protectFromScaleIn">protectFromScaleIn</a></code> | <code>boolean</code> | Allows setting instance protection. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | The ID of the ram disk. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.schedules">schedules</a></code> | <code>{[ key: string ]: any}</code> | Map of autoscaling group schedule to create. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupDescription">securityGroupDescription</a></code> | <code>string</code> | Description for the security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | Name to use on security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupRules">securityGroupRules</a></code> | <code>any</code> | List of security group rules to add to the security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupTags">securityGroupTags</a></code> | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the security group created. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupUseNamePrefix">securityGroupUseNamePrefix</a></code> | <code>string</code> | Determines whether the security group name (`security_group_name`) is used as a prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>string</code> | The ARN of the service-linked role that the ASG will use to call other AWS services. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | A list of subnet IDs to launch resources in. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.suspendedProcesses">suspendedProcesses</a></code> | <code>string[]</code> | A list of processes to suspend for the Auto Scaling Group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tags to add to all resources. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.targetGroupArns">targetGroupArns</a></code> | <code>string[]</code> | A set of `aws_alb_target_group` ARNs, for use with Application or Network Load Balancing. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.terminationPolicies">terminationPolicies</a></code> | <code>string[]</code> | A list of policies to decide how the instances in the Auto Scaling Group should be terminated. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.updateLaunchTemplateDefaultVersion">updateLaunchTemplateDefaultVersion</a></code> | <code>boolean</code> | Whether to update Default Version each update. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.useDefaultTags">useDefaultTags</a></code> | <code>boolean</code> | Enables/disables the use of provider default tags in the tag_specifications of the Auto Scaling group. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.useMixedInstancesPolicy">useMixedInstancesPolicy</a></code> | <code>boolean</code> | Determines whether to use a mixed instances policy in the autoscaling group or not. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.useNamePrefix">useNamePrefix</a></code> | <code>boolean</code> | Determines whether to use `name` as is or create a unique name beginning with the `name` as the prefix. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.userDataTemplatePath">userDataTemplatePath</a></code> | <code>string</code> | Path to a local, custom user data template file to use when rendering user data. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.vpcId">vpcId</a></code> | <code>string</code> | ID of the VPC where the security group/nodes will be provisioned. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of security group IDs to associate. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.waitForCapacityTimeout">waitForCapacityTimeout</a></code> | <code>string</code> | A maximum duration that Terraform should wait for ASG instances to be healthy before timing out. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.waitForElbCapacity">waitForElbCapacity</a></code> | <code>number</code> | Setting this will cause Terraform to wait for exactly this number of healthy instances in all attached load balancers on both create and update operations. |
| <code><a href="#@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.warmPool">warmPool</a></code> | <code>any</code> | If this block is configured, add a Warm Pool to the specified Auto Scaling group. |

---

##### `amiId`<sup>Optional</sup> <a name="amiId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

The AMI from which to launch the instance.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

A list of one or more availability zones for the group.

Used for EC2-Classic and default subnets when not specified with `subnet_ids` argument. Conflicts with `subnet_ids`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: any;
```

- *Type:* any
- *Default:* [object Object]

Specify volumes to attach to the instance besides the volumes specified by the AMI.

---

##### `bootstrapExtraArgs`<sup>Optional</sup> <a name="bootstrapExtraArgs" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.bootstrapExtraArgs"></a>

```typescript
public readonly bootstrapExtraArgs: string;
```

- *Type:* string

Additional arguments passed to the bootstrap script.

When `platform` = `bottlerocket`; these are additional [settings](https://github.com/bottlerocket-os/bottlerocket#settings) that are provided to the Bottlerocket user data

---

##### `capacityRebalance`<sup>Optional</sup> <a name="capacityRebalance" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.capacityRebalance"></a>

```typescript
public readonly capacityRebalance: boolean;
```

- *Type:* boolean

Indicates whether capacity rebalance is enabled.

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: any;
```

- *Type:* any

Targeting for EC2 capacity reservations.

---

##### `clusterAuthBase64`<sup>Optional</sup> <a name="clusterAuthBase64" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterAuthBase64"></a>

```typescript
public readonly clusterAuthBase64: string;
```

- *Type:* string

Base64 encoded CA of associated EKS cluster.

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: string;
```

- *Type:* string

Endpoint of associated EKS cluster.

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- *Type:* string

The IP family used to assign Kubernetes pod and service addresses.

Valid values are `ipv4` (default) and `ipv6`

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Name of associated EKS cluster.

---

##### `clusterPrimarySecurityGroupId`<sup>Optional</sup> <a name="clusterPrimarySecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterPrimarySecurityGroupId"></a>

```typescript
public readonly clusterPrimarySecurityGroupId: string;
```

- *Type:* string

The ID of the EKS cluster primary security group to associate with the instance(s).

This is the security group that is automatically created by the EKS service

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- *Type:* string

Cluster control plane security group ID.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Kubernetes cluster version - used to lookup default AMI ID if one is not provided.

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The CPU options for the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `create`<sup>Optional</sup> <a name="create" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create self managed node group or not.

---

##### `createIamInstanceProfile`<sup>Optional</sup> <a name="createIamInstanceProfile" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.createIamInstanceProfile"></a>

```typescript
public readonly createIamInstanceProfile: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether an IAM instance profile is created or to use an existing IAM instance profile.

---

##### `createLaunchTemplate`<sup>Optional</sup> <a name="createLaunchTemplate" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.createLaunchTemplate"></a>

```typescript
public readonly createLaunchTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create launch template or not.

---

##### `createSchedule`<sup>Optional</sup> <a name="createSchedule" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.createSchedule"></a>

```typescript
public readonly createSchedule: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create autoscaling group schedule or not.

---

##### `createSecurityGroup`<sup>Optional</sup> <a name="createSecurityGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.createSecurityGroup"></a>

```typescript
public readonly createSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to create a security group.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Customize the credit specification of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `defaultCooldown`<sup>Optional</sup> <a name="defaultCooldown" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.defaultCooldown"></a>

```typescript
public readonly defaultCooldown: number;
```

- *Type:* number

The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.

---

##### `deleteTimeout`<sup>Optional</sup> <a name="deleteTimeout" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.deleteTimeout"></a>

```typescript
public readonly deleteTimeout: string;
```

- *Type:* string

Delete timeout to wait for destroying autoscaling group.

---

##### `desiredSize`<sup>Optional</sup> <a name="desiredSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- *Type:* number
- *Default:* 1

The number of Amazon EC2 instances that should be running in the autoscaling group.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean;
```

- *Type:* boolean

If true, enables EC2 instance termination protection.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean;
```

- *Type:* boolean

If true, the launched EC2 instance will be EBS-optimized.

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The elastic GPU to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `elasticInferenceAccelerator`<sup>Optional</sup> <a name="elasticInferenceAccelerator" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configuration block containing an Elastic Inference Accelerator to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `enabledMetrics`<sup>Optional</sup> <a name="enabledMetrics" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.enabledMetrics"></a>

```typescript
public readonly enabledMetrics: string[];
```

- *Type:* string[]

A list of metrics to collect.

The allowed values are `GroupDesiredCapacity`, `GroupInServiceCapacity`, `GroupPendingCapacity`, `GroupMinSize`, `GroupMaxSize`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupStandbyCapacity`, `GroupTerminatingCapacity`, `GroupTerminatingInstances`, `GroupTotalCapacity`, `GroupTotalInstances`

---

##### `enableMonitoring`<sup>Optional</sup> <a name="enableMonitoring" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean;
```

- *Type:* boolean
- *Default:* true

Enables/disables detailed monitoring.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Enable Nitro Enclaves on launched instances The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean;
```

- *Type:* boolean

Allows deleting the Auto Scaling Group without waiting for all instances in the pool to terminate.

You can force an Auto Scaling Group to delete even if it's in the process of scaling a resource. Normally, Terraform drains all the instances before deleting the group. This bypasses that behavior and potentially leaves resources dangling

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: number;
```

- *Type:* number

Time (in seconds) after instance comes into service before checking health.

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

`EC2` or `ELB`.

Controls how health checking is done

---

##### `hibernationOptions`<sup>Optional</sup> <a name="hibernationOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The hibernation options for the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="iamInstanceProfileArn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of an existing IAM instance profile that provides permissions for the node group.

Required if `create_iam_instance_profile` = `false`

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- *Type:* string[]

Additional policies to be added to the IAM role.

---

##### `iamRoleAttachCniPolicy`<sup>Optional</sup> <a name="iamRoleAttachCniPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleAttachCniPolicy"></a>

```typescript
public readonly iamRoleAttachCniPolicy: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to attach the `AmazonEKS_CNI_Policy`/`AmazonEKS_CNI_IPv6_Policy` IAM policy to the IAM IAM role.

WARNING: If set `false` the permissions must be assigned to the `aws-node` DaemonSet pods via another method or nodes will not be able to join the cluster

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- *Type:* string

Description of the role.

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string

Name to use on IAM role created.

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- *Type:* string

IAM role path.

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- *Type:* string

ARN of the policy that is used to set the permissions boundary for the IAM role.

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the IAM role created.

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether cluster IAM role name (`iam_role_name`) is used as a prefix.

---

##### `initialLifecycleHooks`<sup>Optional</sup> <a name="initialLifecycleHooks" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.initialLifecycleHooks"></a>

```typescript
public readonly initialLifecycleHooks: {[ key: string ]: string}[];
```

- *Type:* {[ key: string ]: string}[]
- *Default:* The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

One or more Lifecycle Hooks to attach to the Auto Scaling Group before instances are launched.

The syntax is exactly the same as the separate `aws_autoscaling_lifecycle_hook` resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating a new Auto Scaling Group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

Shutdown behavior for the instance.

Can be `stop` or `terminate`. (Default: `stop`)

---

##### `instanceMarketOptions`<sup>Optional</sup> <a name="instanceMarketOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: any;
```

- *Type:* any

The market (purchasing) option for the instance.

---

##### `instanceRefresh`<sup>Optional</sup> <a name="instanceRefresh" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.instanceRefresh"></a>

```typescript
public readonly instanceRefresh: any;
```

- *Type:* any

If this block is configured, start an Instance Refresh when this Auto Scaling Group is updated.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The type of the instance to launch.

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

The kernel ID.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The key name that should be used for the instance.

---

##### `launchTemplateDefaultVersion`<sup>Optional</sup> <a name="launchTemplateDefaultVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateDefaultVersion"></a>

```typescript
public readonly launchTemplateDefaultVersion: string;
```

- *Type:* string

Default Version of the launch template.

---

##### `launchTemplateDescription`<sup>Optional</sup> <a name="launchTemplateDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateDescription"></a>

```typescript
public readonly launchTemplateDescription: string;
```

- *Type:* string

Description of the launch template.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

Launch template name - either to be created (`var.create_launch_template` = `true`) or existing (`var.create_launch_template` = `false`).

---

##### `launchTemplateTags`<sup>Optional</sup> <a name="launchTemplateTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateTags"></a>

```typescript
public readonly launchTemplateTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the tag_specifications of launch template created.

---

##### `launchTemplateUseNamePrefix`<sup>Optional</sup> <a name="launchTemplateUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateUseNamePrefix"></a>

```typescript
public readonly launchTemplateUseNamePrefix: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to use `launch_template_name` as is or create a unique name beginning with the `launch_template_name` as the prefix.

---

##### `launchTemplateVersion`<sup>Optional</sup> <a name="launchTemplateVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- *Type:* string

Launch template version.

Can be version number, `$Latest`, or `$Default`

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of license specifications to associate with The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `maxInstanceLifetime`<sup>Optional</sup> <a name="maxInstanceLifetime" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.maxInstanceLifetime"></a>

```typescript
public readonly maxInstanceLifetime: number;
```

- *Type:* number

The maximum amount of time, in seconds, that an instance can be in service, values must be either equal to 0 or between 604800 and 31536000 seconds.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number
- *Default:* 3

The maximum size of the autoscaling group.

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Customize the metadata options for the instance.

---

##### `metricsGranularity`<sup>Optional</sup> <a name="metricsGranularity" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.metricsGranularity"></a>

```typescript
public readonly metricsGranularity: string;
```

- *Type:* string

The granularity to associate with the metrics to collect.

The only valid value is `1Minute`

---

##### `minElbCapacity`<sup>Optional</sup> <a name="minElbCapacity" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.minElbCapacity"></a>

```typescript
public readonly minElbCapacity: number;
```

- *Type:* number

Setting this causes Terraform to wait for this number of instances to show up healthy in the ELB only on creation.

Updates will not wait on ELB instance number changes

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

The minimum size of the autoscaling group.

---

##### `mixedInstancesPolicy`<sup>Optional</sup> <a name="mixedInstancesPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.mixedInstancesPolicy"></a>

```typescript
public readonly mixedInstancesPolicy: any;
```

- *Type:* any

Configuration block containing settings to define launch targets for Auto Scaling groups.

---

##### `name`<sup>Optional</sup> <a name="name" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Self managed Node Group.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: any[];
```

- *Type:* any[]

Customize network interfaces to be attached at instance boot time.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.placement"></a>

```typescript
public readonly placement: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The placement of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

The name of the placement group into which you'll launch your instances, if any.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string
- *Default:* linux

Identifies if the OS platform is `bottlerocket`, `linux`, or `windows` based.

---

##### `postBootstrapUserData`<sup>Optional</sup> <a name="postBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.postBootstrapUserData"></a>

```typescript
public readonly postBootstrapUserData: string;
```

- *Type:* string

User data that is appended to the user data script after of the EKS bootstrap script.

Not used when `platform` = `bottlerocket`

---

##### `preBootstrapUserData`<sup>Optional</sup> <a name="preBootstrapUserData" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.preBootstrapUserData"></a>

```typescript
public readonly preBootstrapUserData: string;
```

- *Type:* string

User data that is injected into the user data script ahead of the EKS bootstrap script.

Not used when `platform` = `bottlerocket`

---

##### `protectFromScaleIn`<sup>Optional</sup> <a name="protectFromScaleIn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.protectFromScaleIn"></a>

```typescript
public readonly protectFromScaleIn: boolean;
```

- *Type:* boolean

Allows setting instance protection.

The autoscaling group will not select instances with this setting for termination during scale in events.

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

The ID of the ram disk.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.schedules"></a>

```typescript
public readonly schedules: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Map of autoscaling group schedule to create.

---

##### `securityGroupDescription`<sup>Optional</sup> <a name="securityGroupDescription" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupDescription"></a>

```typescript
public readonly securityGroupDescription: string;
```

- *Type:* string
- *Default:* EKS self-managed node group security group

Description for the security group created.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

Name to use on security group created.

---

##### `securityGroupRules`<sup>Optional</sup> <a name="securityGroupRules" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupRules"></a>

```typescript
public readonly securityGroupRules: any;
```

- *Type:* any
- *Default:* [object Object]

List of security group rules to add to the security group created.

---

##### `securityGroupTags`<sup>Optional</sup> <a name="securityGroupTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupTags"></a>

```typescript
public readonly securityGroupTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the security group created.

---

##### `securityGroupUseNamePrefix`<sup>Optional</sup> <a name="securityGroupUseNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.securityGroupUseNamePrefix"></a>

```typescript
public readonly securityGroupUseNamePrefix: string;
```

- *Type:* string
- *Default:* true

Determines whether the security group name (`security_group_name`) is used as a prefix.

---

##### `serviceLinkedRoleArn`<sup>Optional</sup> <a name="serviceLinkedRoleArn" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.serviceLinkedRoleArn"></a>

```typescript
public readonly serviceLinkedRoleArn: string;
```

- *Type:* string

The ARN of the service-linked role that the ASG will use to call other AWS services.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

A list of subnet IDs to launch resources in.

Subnets automatically determine which availability zones the group will reside. Conflicts with `availability_zones`

---

##### `suspendedProcesses`<sup>Optional</sup> <a name="suspendedProcesses" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.suspendedProcesses"></a>

```typescript
public readonly suspendedProcesses: string[];
```

- *Type:* string[]

A list of processes to suspend for the Auto Scaling Group.

The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`. Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your Auto Scaling Group from functioning properly

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of tags to add to all resources.

---

##### `targetGroupArns`<sup>Optional</sup> <a name="targetGroupArns" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.targetGroupArns"></a>

```typescript
public readonly targetGroupArns: string[];
```

- *Type:* string[]

A set of `aws_alb_target_group` ARNs, for use with Application or Network Load Balancing.

---

##### `terminationPolicies`<sup>Optional</sup> <a name="terminationPolicies" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.terminationPolicies"></a>

```typescript
public readonly terminationPolicies: string[];
```

- *Type:* string[]

A list of policies to decide how the instances in the Auto Scaling Group should be terminated.

The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `OldestLaunchTemplate`, `AllocationStrategy`, `Default`

---

##### `updateLaunchTemplateDefaultVersion`<sup>Optional</sup> <a name="updateLaunchTemplateDefaultVersion" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.updateLaunchTemplateDefaultVersion"></a>

```typescript
public readonly updateLaunchTemplateDefaultVersion: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to update Default Version each update.

Conflicts with `launch_template_default_version`

---

##### `useDefaultTags`<sup>Optional</sup> <a name="useDefaultTags" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.useDefaultTags"></a>

```typescript
public readonly useDefaultTags: boolean;
```

- *Type:* boolean

Enables/disables the use of provider default tags in the tag_specifications of the Auto Scaling group.

---

##### `useMixedInstancesPolicy`<sup>Optional</sup> <a name="useMixedInstancesPolicy" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.useMixedInstancesPolicy"></a>

```typescript
public readonly useMixedInstancesPolicy: boolean;
```

- *Type:* boolean

Determines whether to use a mixed instances policy in the autoscaling group or not.

---

##### `useNamePrefix`<sup>Optional</sup> <a name="useNamePrefix" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.useNamePrefix"></a>

```typescript
public readonly useNamePrefix: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to use `name` as is or create a unique name beginning with the `name` as the prefix.

---

##### `userDataTemplatePath`<sup>Optional</sup> <a name="userDataTemplatePath" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.userDataTemplatePath"></a>

```typescript
public readonly userDataTemplatePath: string;
```

- *Type:* string

Path to a local, custom user data template file to use when rendering user data.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

ID of the VPC where the security group/nodes will be provisioned.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

A list of security group IDs to associate.

---

##### `waitForCapacityTimeout`<sup>Optional</sup> <a name="waitForCapacityTimeout" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.waitForCapacityTimeout"></a>

```typescript
public readonly waitForCapacityTimeout: string;
```

- *Type:* string

A maximum duration that Terraform should wait for ASG instances to be healthy before timing out.

(See also Waiting for Capacity below.) Setting this to '0' causes Terraform to skip all Capacity Waiting behavior.

---

##### `waitForElbCapacity`<sup>Optional</sup> <a name="waitForElbCapacity" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.waitForElbCapacity"></a>

```typescript
public readonly waitForElbCapacity: number;
```

- *Type:* number

Setting this will cause Terraform to wait for exactly this number of healthy instances in all attached load balancers on both create and update operations.

Takes precedence over `min_elb_capacity` behavior.

---

##### `warmPool`<sup>Optional</sup> <a name="warmPool" id="@danielmschmidt/terraform-cdk-terraform-module-publishing-on-gh-packages.EksSelfManagedNodeGroupOptions.property.warmPool"></a>

```typescript
public readonly warmPool: any;
```

- *Type:* any

If this block is configured, add a Warm Pool to the specified Auto Scaling group.

---




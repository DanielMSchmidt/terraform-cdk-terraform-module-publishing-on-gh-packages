import { Construct } from "constructs";
// Re-Export module bindings
export * from "./terraformModules";
import {
  Eks,
  EksOptions,
  EksSelfManagedNodeGroupOptions,
  EksSelfManagedNodeGroup,
  EksEksManagedNodeGroupOptions,
  EksEksManagedNodeGroup,
} from "./terraformModules";

// Add your custom constructs here
export class EksCluster extends Construct {
  public eks: Eks;
  constructor(scope: Construct, id: string, options: EksOptions) {
    super(scope, id);

    this.eks = new Eks(this, "eks", options);
  }

  public addSelfManagedNodeGroup(
    nodeGroupName: string,
    options: EksSelfManagedNodeGroupOptions
  ): EksSelfManagedNodeGroup {
    return new EksSelfManagedNodeGroup(this, nodeGroupName, {
      ...options,
      name: nodeGroupName,
      clusterName: this.eks.clusterName,
      vpcId: this.eks.vpcId,
    });
  }

  public addManagedNodeGroup(
    nodeGroupName: string,
    options: EksEksManagedNodeGroupOptions
  ): EksEksManagedNodeGroup {
    return new EksEksManagedNodeGroup(this, nodeGroupName, {
      ...options,
      name: nodeGroupName,
      clusterName: this.eks.clusterName,
      vpcId: this.eks.vpcId,
    });
  }
}

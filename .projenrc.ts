import {
  publishToGithubPackages,
  TerraformModule,
} from "projen-cdktf-hybrid-construct";
const project = new TerraformModule({
  ...publishToGithubPackages({
    name: "eks-cluster",
    namespace: "danielmschmidt",
    registries: ["npm", "maven"],
  }),
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],
  name: "terraform-cdk-terraform-module-publishing-on-gh-pages",
  repositoryUrl:
    "https://github.com/danielmschmidt92/terraform-cdk-terraform-module-publishing-on-gh-pages.git",

  terraformModules: [
    {
      name: "eks",
      source: "terraform-aws-modules/eks/aws",
      version: "18.20.5",
    },
    {
      name: "eksEksManagedNodeGroup",
      source: "terraform-aws-modules/eks/aws//modules/eks-managed-node-group",
      version: "18.20.5",
    },
    {
      name: "eksSelfManagedNodeGroup",
      source: "terraform-aws-modules/eks/aws//modules/self-managed-node-group",
      version: "18.20.5",
    },
  ],
  // cdktfVersion: "^0.10.1",      /* Minimum target version of this library. */
  // deps: [],                     /* Runtime dependencies of this module. */
  // description: undefined,       /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,       /* The "name" in package.json. */
  // terraformModules: undefined,  /* List of modules to generate bindings for. */
});
project.synth();

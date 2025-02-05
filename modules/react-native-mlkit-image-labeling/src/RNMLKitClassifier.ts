import RNMLKitImageLabeler, {
  ClassificationResult,
  RNMLKitCustomImageLabelerOptions,
  RNMLKitImageLabelerSpec,
} from "./RNMLKitImageLabeler";
import { SharedRef as SharedRefType } from 'expo-modules-core/src/ts-declarations/SharedRef';

export class RNMLKitClassifier {
  private modelSpec: RNMLKitImageLabelerSpec;

  constructor(modelSpec: RNMLKitImageLabelerSpec) {
    this.modelSpec = modelSpec;
  }

  load(): Promise<string | undefined> {
    return RNMLKitImageLabeler.loadModel(this.modelSpec);
  }

  isLoaded() {
    return RNMLKitImageLabeler.isLoaded(this.modelSpec.modelName);
  }

  async classifyImage(image: SharedRefType<'image'>): Promise<ClassificationResult> {
    // Perform a check if the model is loaded
    if (!this.isLoaded()) {
      throw new Error("Model is not loaded");
    }

    try {
      // Call the native method with the modelName as an extra parameter
      return RNMLKitImageLabeler.classifyImage(
        this.modelSpec.modelName,
        image
      );
    } catch (err: any) {
      // Handle specific errors as needed, or rethrow them
      throw new Error(`Failed to classify image: ${err.message}`);
    }
  }

  async updateOptionsAndReload(
    newOptions: RNMLKitCustomImageLabelerOptions
  ): Promise<void> {
    this.modelSpec = { ...this.modelSpec, options: newOptions };
    // Call the native method to update options and reload the model
    await RNMLKitImageLabeler.updateOptionsAndReload(
      this.modelSpec.modelName,
      newOptions
    );
  }
}

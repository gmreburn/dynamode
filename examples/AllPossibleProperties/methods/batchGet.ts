import { AllPossibleProperties } from '../model';

async function batchGet() {
  const modelBatchGet = await AllPossibleProperties.batchGet([
    { partitionKey: 'pk1', sortKey: 'sk1' },
    { partitionKey: 'pk2', sortKey: 'sk2' },
  ]);

  console.log();
  console.log('OUTPUT:');
  console.log(modelBatchGet);
}

batchGet();

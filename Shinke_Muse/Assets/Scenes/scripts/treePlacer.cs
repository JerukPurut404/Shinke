using UnityEngine;

public class treePlacer : MonoBehaviour
{
    public GameObject[] treePrefabs; // Array to hold different tree prefabs
    public int numberOfTrees = 100; // Number of trees to instantiate
    public Vector3 areaSize = new Vector3(50, 0, 50); // Size of the area in which to place the trees

    void Start()
    {
        PlaceTrees();
    }

    void PlaceTrees()
    {
        for (int i = 0; i < numberOfTrees; i++)
        {
            Vector3 randomPosition = GetRandomPosition();
            GameObject randomTreePrefab = GetRandomTreePrefab();
            Instantiate(randomTreePrefab, randomPosition, Quaternion.identity);
        }
    }

    Vector3 GetRandomPosition()
    {
        float x = Random.Range(-areaSize.x / 2, areaSize.x / 2);
        float z = Random.Range(-areaSize.z / 2, areaSize.z / 2);
        float y = Terrain.activeTerrain.SampleHeight(new Vector3(x, 0, z));
        return new Vector3(x, y, z);
    }

    GameObject GetRandomTreePrefab()
    {
        int randomIndex = Random.Range(0, treePrefabs.Length);
        return treePrefabs[randomIndex];
    }
}
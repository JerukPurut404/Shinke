using UnityEngine;

public class DestroyOnTrigger : MonoBehaviour
{
    public int scoreValue = 1; // Waarde die aan de score wordt toegevoegd bij vernietiging

    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            // Verhoog de score
            ScoreManagerTMP.AddScore(scoreValue);

            // Vernietig het object
            Destroy(gameObject);
        }
    }
}

using TMPro; // Import TextMesh Pro namespace
using UnityEngine;
using UnityEngine.SceneManagement;

public class ScoreManagerTMP : MonoBehaviour
{
    public string sceneToLoad = "Level 1";
    public static int score = 0; // Static variable to keep track of the score
    public TMP_Text scoreText; // TextMesh Pro UI element to display the score

    void Start()
    {
        UpdateScoreText();
    }

    // Method to increase the score
    public static void AddScore(int amount)
    {
        score += amount;
    }

    // Method to update the score text
    public void UpdateScoreText()
    {
        if (scoreText != null)
        {
            scoreText.text = "Collected: " + score.ToString();
        }
    }

    // Ensure the score text is updated when the score changes
    void Update()
    {
        UpdateScoreText();
        if (score == 10)
        {
            SceneManager.LoadScene(sceneToLoad);
        }
    }
}

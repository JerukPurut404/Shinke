using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.SceneManagement;

public class StartScreen : MonoBehaviour
{
    public string sceneToLoad = "Level 1"; // Change this to the name of the scene you want to load

    private InputAction anyButtonAction;

    private void OnEnable()
    {
        anyButtonAction = new InputAction(binding: "<Keyboard>/anyKey");
        anyButtonAction.AddBinding("<Gamepad>/buttonSouth"); // Add more bindings as needed for other input types
        anyButtonAction.performed += OnAnyButtonPress;
        anyButtonAction.Enable();
    }

    private void OnDisable()
    {
        anyButtonAction.performed -= OnAnyButtonPress;
        anyButtonAction.Disable();
    }

    private void OnAnyButtonPress(InputAction.CallbackContext context)
    {
        SceneManager.LoadScene(sceneToLoad);
    }
}


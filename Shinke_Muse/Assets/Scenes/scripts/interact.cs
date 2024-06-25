using UnityEngine;
using UnityEngine.InputSystem;

public class Interact : MonoBehaviour
{
    RaycastHit hit;
    Outline outline;
    [SerializeField] private float interactDistance;
    public LayerMask interactable;
    
    

    // Update is called once per frame
    void Update()
    {
        
        if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), out hit, interactDistance, interactable))
        {
            outline = hit.transform.gameObject.GetComponent<Outline>();
            outline.enabled = true;

            if (hit.transform.CompareTag("destroyable"))
            {
                if (Input.GetKeyDown(KeyCode.E))
                {
                    Destroy(hit.transform.gameObject);
                }
            }
        }
        else if (outline != null)
        {
            outline.enabled = false;
            outline = null;
            return;
        }
    }
}



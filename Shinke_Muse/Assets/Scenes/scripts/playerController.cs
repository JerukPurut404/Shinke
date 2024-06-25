using UnityEngine;
using UnityEngine.InputSystem;

public class playerController : MonoBehaviour
{
    public Rigidbody rb;
    public GameObject camHolder;
    public float speed, sensitivity, maxForce, jumpForces;
    private Vector2 move, look;
    private float LookRotation;
    public bool grounded;
    // Start is called before the first frame update

    public void OnMove(InputAction.CallbackContext context)
    {
        move = context.ReadValue<Vector2>();
    }

    public void OnLook(InputAction.CallbackContext context)
    {
        look = context.ReadValue<Vector2>();
    }

    public void OnJump(InputAction.CallbackContext context)
    {
        jump();
    }

    private void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
        

    }

    private void FixedUpdate()
    {
        Move();
    }

    void Move()
    {
        //find target velocity
        Vector3 currentVelocity = rb.velocity;
        Vector3 targetVelocity = new Vector3(move.x, 0, move.y);
        targetVelocity *= speed;

        //align derction
        targetVelocity = transform.TransformDirection(targetVelocity);

        //calculate force
        Vector3 velocityChange = (targetVelocity - currentVelocity);
        velocityChange = new Vector3(velocityChange.x, 0, velocityChange.z);

        //limit force
        Vector3.ClampMagnitude(velocityChange, maxForce);

        rb.AddForce(velocityChange, ForceMode.VelocityChange);
    }

    

    private void LateUpdate()
    {
        //turn
        transform.Rotate(Vector3.up * look.x * sensitivity);

        //look
        LookRotation += (-look.y * sensitivity);
        LookRotation = Mathf.Clamp(LookRotation, -90, 90);
        camHolder.transform.eulerAngles = new Vector3(LookRotation, camHolder.transform.eulerAngles.y, camHolder.transform.eulerAngles.z);
    }

    void jump()
    {
        Vector3 jumpforces = Vector3.zero;

        if (grounded)
        {
            jumpforces = Vector3.up * jumpForces;
        }
    }

    public void SetGrounded(bool state)
    {
        grounded = state;
    }

}


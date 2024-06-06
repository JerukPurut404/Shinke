using UnityEngine;
using UnityEngine.AI;

public class NativeAnim : MonoBehaviour
{
    public Rigidbody rb;
    public Animator animator;
    public NavMeshAgent agent;
    public GameObject Lenaap;
    

    private Transform playerTransform;
    public float detectionRadius = 5f;
    private bool isPlayerClose = false;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        agent = GetComponent<NavMeshAgent>();
        playerTransform = GameObject.FindGameObjectWithTag("Player").transform;
    }

    void Update()
    {
        
        float speed = agent.velocity.magnitude;


        if (speed >= 0.3)
        {
            animator.SetBool("Walk", true);
          
        }
        
        else if (isPlayerClose = false && speed <= 0.2)
        {
            animator.SetBool("Idle", true);
           
        }

        float distanceToPlayer = Vector3.Distance(playerTransform.position, transform.position);
        if (distanceToPlayer <= detectionRadius && !isPlayerClose)
        {
            agent.speed = 0;
            isPlayerClose = true;
            Lenaap.transform.LookAt(playerTransform.position);
            animator.SetBool("Wave", true);
            
        }
        else if (distanceToPlayer > detectionRadius && isPlayerClose)
        {

            isPlayerClose = false;

        }
    }
}

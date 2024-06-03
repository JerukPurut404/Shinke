using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class NativeAnim : MonoBehaviour
{
    public Rigidbody rb;
    public Animator animator;
    public NavMeshAgent agent;

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
        else
        {
            animator.SetBool("Walk", false);
        }

        float distanceToPlayer = Vector3.Distance(playerTransform.position, transform.position);
        if (distanceToPlayer <= detectionRadius && !isPlayerClose)
        {

            isPlayerClose = true;
            animator.SetBool("Dance", true);
        }
        else if (distanceToPlayer > detectionRadius && isPlayerClose)
        {

            isPlayerClose = false;

        }
    }
}
